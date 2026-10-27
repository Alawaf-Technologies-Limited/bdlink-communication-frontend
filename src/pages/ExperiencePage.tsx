import { useState } from 'react'
import { CheckCircle2, Mail, Phone, Printer } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { PillTabs } from '@/components/ui/PillTabs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EXPERIENCE } from '@/data/content'
import { COMPANY } from '@/data/site'

const tabs = [
  { id: 'service-delivery', label: 'Service & Delivery' },
  { id: 'first-in-service-test', label: 'First In Service Test' },
  { id: 'international-standard-equipment', label: 'International Standard Equipment' },
  { id: 'sla', label: 'Service Level Agreement (SLA)' },
  { id: 'monitoring', label: 'Monitoring' },
]

export function ExperiencePage() {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <>
      <PageHero
        title="Experience"
        image="/assets/heroes/experience-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Experience' },
        ]}
      >
        {EXPERIENCE.intro}
      </PageHero>

      <PillTabs tabs={tabs} activeId={active} onSelect={setActive} />

      <section id="service-delivery" className="scroll-mt-28 bg-surface py-14">
        <Container>
          <SectionHeading>Service & Delivery</SectionHeading>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-muted">
            {EXPERIENCE.serviceDelivery}
          </p>
        </Container>
      </section>

      <section id="first-in-service-test" className="scroll-mt-28 bg-surface-muted py-14">
        <Container>
          <SectionHeading>First In Service Test</SectionHeading>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-muted">
            {EXPERIENCE.firstInServiceTest}
          </p>
        </Container>
      </section>

      <section id="international-standard-equipment" className="scroll-mt-28 bg-surface py-14">
        <Container>
          <SectionHeading>International Standard Equipment</SectionHeading>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-muted">{EXPERIENCE.equipment}</p>
        </Container>
      </section>

      <section id="sla" className="scroll-mt-28 bg-surface-muted py-14">
        <Container>
          <SectionHeading>Service Level Agreement (SLA)</SectionHeading>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-muted">{EXPERIENCE.slaIntro}</p>

          <div className="mt-8 rounded-[var(--radius-card)] bg-cta px-6 py-10 text-center text-white shadow-card">
            <p className="text-5xl font-black sm:text-6xl">99.99%</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em]">Service availability</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[var(--radius-card)] bg-white p-6 shadow-soft">
              <h3 className="text-lg font-extrabold">Mean Time to Repair (MTTR)</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{EXPERIENCE.mttr}</p>
            </article>
            <article className="rounded-[var(--radius-card)] bg-white p-6 shadow-soft">
              <h3 className="text-lg font-extrabold">Escalation Process</h3>
              <p className="mt-3 text-sm text-ink-muted">
                If support requests have not been resolved within their resolution targets, the
                requests MUST be escalated by the assigned engineer to the Emergency Contacts:
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-cta text-white">
                    <Mail className="size-4" />
                  </span>
                  <a href={`mailto:${COMPANY.nocEmail}`} className="font-semibold text-ink hover:underline">
                    {COMPANY.nocEmail}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-cta text-white">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    {COMPANY.emergencyHotline}, {COMPANY.nocPhone}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-cta text-white">
                    <Printer className="size-4" />
                  </span>
                  <span>{COMPANY.fax}</span>
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section id="monitoring" className="scroll-mt-28 bg-surface py-14">
        <Container>
          <SectionHeading>Monitoring</SectionHeading>
          <p className="mt-4 max-w-4xl leading-relaxed text-ink-muted">
            {EXPERIENCE.monitoringIntro}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {EXPERIENCE.monitoring.map((item) => (
              <article
                key={item.title}
                className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                {'bullets' in item && item.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-ink-muted">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
