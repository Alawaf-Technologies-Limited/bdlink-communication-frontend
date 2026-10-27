import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { BOARD } from '@/data/content'

export function BoardPage() {
  return (
    <>
      <PageHero
        title="Board of Directors"
        image="/assets/heroes/board-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Board of Directors' },
        ]}
      >
        {BOARD.intro}
      </PageHero>

      <section className="bg-surface py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-extrabold text-ink">{member.name}</h2>
                <p className="mt-1 text-sm text-ink-muted">{member.title}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  )
}
