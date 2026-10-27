import { useState } from 'react'
import { Award } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { PillTabs } from '@/components/ui/PillTabs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ABOUT } from '@/data/content'
import { cn } from '@/lib/cn'

const tabs = [
  { id: 'company-background', label: 'Company Background' },
  { id: 'mission-vision-strategy', label: 'Mission, Vision & Strategy' },
  { id: 'other-companies', label: 'Other Companies' },
]

export function AboutPage() {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <>
      <PageHero
        title="Company Overview"
        image="/assets/heroes/overview-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Company Overview' },
        ]}
      />
      <PillTabs tabs={tabs} activeId={active} onSelect={setActive} />

      <section id="company-background" className="scroll-mt-28 bg-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading>Company Background</SectionHeading>
            <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
              {ABOUT.background.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {ABOUT.licenses.map((license) => (
              <article
                key={license.name}
                className="flex gap-4 rounded-[var(--radius-card)] bg-surface-muted p-5"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cta text-white">
                  <Award className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{license.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    Date of Award of License: {license.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="mission-vision-strategy" className="scroll-mt-28 bg-surface-muted py-16">
        <Container>
          <SectionHeading>Mission, Vision & Strategy</SectionHeading>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              { title: 'Vision', border: 'border-t-cta', body: ABOUT.vision },
              { title: 'Mission', border: 'border-t-charcoal', body: ABOUT.mission },
              { title: 'Strategy', border: 'border-t-brand-green', body: ABOUT.strategy },
            ].map((card) => (
              <article
                key={card.title}
                className={cn(
                  'rounded-[var(--radius-card)] border-t-4 bg-white p-6 shadow-soft',
                  card.border,
                )}
              >
                <h3 className="text-lg font-extrabold uppercase tracking-wide">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="other-companies" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeading>Other Companies</SectionHeading>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {ABOUT.otherCompanies.map((co) => (
              <article
                key={co.name}
                className="rounded-[var(--radius-card)] bg-surface-muted p-6"
              >
                <h3 className="text-xl font-bold">{co.name}</h3>
                <a
                  href={co.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-semibold text-sky hover:underline"
                >
                  {co.url.replace(/^https?:\/\//, '')}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{co.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
