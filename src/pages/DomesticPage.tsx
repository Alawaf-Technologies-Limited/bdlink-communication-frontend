import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { PillTabs } from '@/components/ui/PillTabs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DOMESTIC } from '@/data/content'
import { useHashTab } from '@/lib/useHashTab'

const tabs = [
  { id: 'metro-ethernet', label: 'Metro Ethernet (ME)' },
  { id: 'eosdh', label: 'Ethernet over Synchronous Digital Hierarchy (EoSDH)' },
  { id: 'sdh', label: 'Synchronous Digital Hierarchy (SDH)' },
  { id: 'global-mpls', label: 'Global MPLS' },
]

export function DomesticPage() {
  const [active, setActive] = useHashTab('metro-ethernet')

  return (
    <>
      <PageHero
        title="Domestic"
        image="/assets/heroes/domestic-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Services', to: '/services/domestic' },
          { label: 'Domestic' },
        ]}
      >
        {DOMESTIC.intro}
      </PageHero>

      <PillTabs tabs={tabs} activeId={active} onSelect={setActive} />

      <section id="metro-ethernet" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeading>Metro Ethernet (ME)</SectionHeading>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <img
              src={DOMESTIC.metroEthernet.image}
              alt="Metro Ethernet network diagram"
              className="w-full rounded-[var(--radius-card)] border border-border bg-surface-muted object-contain"
            />
            <div>
              <p className="leading-relaxed text-ink-muted">{DOMESTIC.metroEthernet.body}</p>
              <p className="mt-5 rounded-[var(--radius-card)] border-l-4 border-brand-green bg-surface-muted px-4 py-3 text-sm font-semibold text-ink">
                {DOMESTIC.metroEthernet.callout}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="eosdh" className="scroll-mt-28 bg-surface-muted py-16">
        <Container>
          <SectionHeading>Ethernet over Synchronous Digital Hierarchy (EoSDH)</SectionHeading>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <img
              src={DOMESTIC.eosdh.image}
              alt="EoSDH network diagram"
              className="w-full rounded-[var(--radius-card)] border border-border bg-white object-contain"
            />
            <div className="space-y-4 leading-relaxed text-ink-muted">
              {DOMESTIC.eosdh.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="sdh" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeading>Synchronous Digital Hierarchy (SDH)</SectionHeading>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <img
              src={DOMESTIC.sdh.image}
              alt="SDH network diagram"
              className="w-full rounded-[var(--radius-card)] border border-border bg-surface-muted object-contain"
            />
            <p className="leading-relaxed text-ink-muted">{DOMESTIC.sdh.body}</p>
          </div>
        </Container>
      </section>

      <section id="global-mpls" className="scroll-mt-28 bg-surface-muted py-16">
        <Container>
          <SectionHeading>Global MPLS</SectionHeading>
          <p className="mt-5 max-w-4xl leading-relaxed text-ink-muted">{DOMESTIC.globalMpls}</p>
        </Container>
      </section>
    </>
  )
}
