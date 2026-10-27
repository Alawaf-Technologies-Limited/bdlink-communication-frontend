import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { PARTNERS } from '@/data/site'

export function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners"
        image="/assets/heroes/partners-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Partners' },
        ]}
      />

      <section className="bg-surface py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex h-32 items-center justify-center rounded-[var(--radius-card)] border border-border bg-white px-4 shadow-soft"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
