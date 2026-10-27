import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { PillTabs } from '@/components/ui/PillTabs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { INTERNATIONAL } from '@/data/content'
import { IPLC_FEATURES, MPLS_FEATURES } from '@/data/site'
import { useHashTab } from '@/lib/useHashTab'

const tabs = [
  { id: 'iplc', label: 'IPLC Service (International Private Leased Circuit)' },
  { id: 'global-ethernet', label: 'Global Ethernet' },
  { id: 'mpls-vpn', label: 'MPLS VPN' },
  { id: 'iig', label: 'International Internet Gateway (IIG or IP Port) and IP Transit Service' },
  { id: 'submarine-cable', label: 'Submarine Cable (SMW5 / SMW4)' },
]

export function InternationalPage() {
  const [active, setActive] = useHashTab('iplc')

  return (
    <>
      <PageHero
        title="International"
        image="/assets/heroes/international-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Services', to: '/services/international' },
          { label: 'International' },
        ]}
      >
        {INTERNATIONAL.intro}
      </PageHero>

      <PillTabs tabs={tabs} activeId={active} onSelect={setActive} />

      <section id="iplc" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading>IPLC Service (International Private Leased Circuit)</SectionHeading>
              <div className="mt-5 space-y-4 text-ink-muted leading-relaxed">
                {INTERNATIONAL.iplc.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-card)]">
              <img
                src="/assets/heroes/fiber-optic.jpg"
                alt="Fiber optic network lights"
                className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover object-center"
              />
            </div>
          </div>

          <h3 className="mt-12 text-xl font-bold">Features & Benefits</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IPLC_FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[var(--radius-card)] bg-surface-muted p-5"
              >
                <h4 className="font-bold text-ink">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
                {'speeds' in feature && feature.speeds ? (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {feature.speeds.map((speed) => (
                      <span
                        key={speed}
                        className="rounded-md bg-white px-2 py-1 text-center text-xs font-semibold text-ink"
                      >
                        {speed}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-card)] bg-cta px-6 py-8 text-center text-white shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">
              Service Level Agreements
            </p>
            <p className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Up to <span className="text-4xl">99.99%</span> End to End circuit availability.
            </p>
          </div>
        </Container>
      </section>

      <section id="global-ethernet" className="scroll-mt-28 bg-surface-muted py-16">
        <Container>
          <SectionHeading>Global Ethernet</SectionHeading>
          <p className="mt-5 max-w-4xl leading-relaxed text-ink-muted">
            {INTERNATIONAL.globalEthernet}
          </p>
        </Container>
      </section>

      <section id="mpls-vpn" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeading>MPLS VPN</SectionHeading>
          <p className="mt-5 max-w-4xl leading-relaxed text-ink-muted">{INTERNATIONAL.mplsVpn}</p>
          <h3 className="mt-8 text-lg font-bold">Key Features</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {MPLS_FEATURES.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-muted">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="iig" className="scroll-mt-28 bg-surface-muted py-16">
        <Container>
          <SectionHeading>
            International Internet Gateway (IIG or IP Port) and IP Transit Service
          </SectionHeading>
          <p className="mt-5 max-w-4xl leading-relaxed text-ink-muted">{INTERNATIONAL.iig}</p>
        </Container>
      </section>

      <section id="submarine-cable" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeading>Submarine Cable (SMW5 / SMW4)</SectionHeading>
          <p className="mt-5 max-w-4xl leading-relaxed text-ink-muted">
            {INTERNATIONAL.submarine}
          </p>
        </Container>
      </section>
    </>
  )
}
