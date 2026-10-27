import { useId, useState, type FormEvent } from 'react'
import { MapPin, Phone, Users } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { COMPANY } from '@/data/site'
import { submitContact, validateContact, type ContactPayload } from '@/lib/contact'
import { cn } from '@/lib/cn'
import { telHref } from '@/lib/phone'

const empty: ContactPayload = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactPage() {
  const formId = useId()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({})
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  function setField<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validateContact(values)
    setErrors(next)
    if (Object.keys(next).length) {
      setNotice({ kind: 'err', text: 'Please correct the highlighted fields.' })
      return
    }

    setBusy(true)
    setNotice(null)
    try {
      await submitContact(values)
      setNotice({
        kind: 'ok',
        text: 'Thanks — your message was received. We will follow up by email.',
      })
      setValues(empty)
    } catch {
      setNotice({
        kind: 'err',
        text: `Unable to submit right now. Please email ${COMPANY.email} directly.`,
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        image="/assets/heroes/contact-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="bg-surface-muted py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <aside className="rounded-[var(--radius-card)] bg-charcoal p-6 text-white shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-cta">
                <Phone className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-lg font-bold">Contact us</h2>
              <p className="mt-2 text-sm text-white/85">
                IP PABX:{' '}
                <a className="underline" href={telHref(COMPANY.pabx)}>
                  {COMPANY.pabx}
                </a>
              </p>
            </aside>

            <aside className="rounded-[var(--radius-card)] bg-white p-6 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-cta text-white">
                <Users className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-lg font-bold">Marketing</h2>
              <ul className="mt-2 space-y-1 text-sm text-ink-muted">
                <li>IP PABX: {COMPANY.marketingPabx}</li>
                <li>Mobile: {COMPANY.mobile}</li>
                <li>
                  Email:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="font-semibold text-sky underline">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </aside>

            <aside className="rounded-[var(--radius-card)] bg-white p-6 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-green text-white">
                <MapPin className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-lg font-bold">Address</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {COMPANY.addressLines.join(', ')}
              </p>
            </aside>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[var(--radius-card)] bg-white p-6 shadow-card sm:p-8"
            aria-describedby={`${formId}-status`}
          >
            <p className="text-ink-muted">
              If you have an inquiry, partnership request or comment, we would love to hear from
              you.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                id={`${formId}-name`}
                label="Your Name"
                required
                error={errors.name}
                value={values.name}
                onChange={(v) => setField('name', v)}
              />
              <Field
                id={`${formId}-email`}
                label="Your Email"
                type="email"
                required
                error={errors.email}
                value={values.email}
                onChange={(v) => setField('email', v)}
              />
            </div>

            <div className="mt-4">
              <Field
                id={`${formId}-subject`}
                label="Subject"
                value={values.subject}
                onChange={(v) => setField('subject', v)}
              />
            </div>

            <div className="mt-4">
              <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-ink">
                Your Message <span className="text-cta">*</span>
              </label>
              <textarea
                id={`${formId}-message`}
                rows={6}
                value={values.message}
                onChange={(e) => setField('message', e.target.value)}
                className={cn(
                  'mt-2 w-full rounded-xl border bg-surface px-3 py-2.5 text-sm outline-none focus:border-cta',
                  errors.message ? 'border-cta' : 'border-border',
                )}
                aria-invalid={Boolean(errors.message)}
                aria-required
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-cta" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div id={`${formId}-status`} className="mt-4 min-h-5 text-sm" aria-live="polite">
              {notice ? (
                <p className={notice.kind === 'ok' ? 'text-brand-green' : 'text-cta'}>
                  {notice.text}
                </p>
              ) : null}
            </div>

            <Button type="submit" className="mt-2" disabled={busy}>
              {busy ? 'Sending…' : 'Send'}
            </Button>
          </form>
        </Container>

        <Container className="mt-10">
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-charcoal">
            <img
              src="/assets/heroes/network-map.jpg"
              alt="BD Link global connectivity map"
              className="aspect-[21/9] w-full object-cover object-center"
            />
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  error,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  error?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label} {required ? <span className="text-cta">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'mt-2 w-full rounded-xl border bg-surface px-3 py-2.5 text-sm outline-none focus:border-cta',
          error ? 'border-cta' : 'border-border',
        )}
        aria-invalid={Boolean(error)}
        aria-required={required}
      />
      {error ? (
        <p className="mt-1 text-xs text-cta" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
