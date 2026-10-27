import { Users } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { MANAGEMENT } from '@/data/content'
import { cn } from '@/lib/cn'

export function ManagementPage() {
  return (
    <>
      <PageHero
        title="Management"
        image="/assets/heroes/management-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Management' },
        ]}
      >
        {MANAGEMENT.intro}
      </PageHero>

      <section className="bg-surface-muted py-16">
        <Container className="space-y-6">
          {MANAGEMENT.people.map((person) => (
            <article
              key={person.name}
              className="rounded-[var(--radius-card)] bg-white p-6 shadow-soft sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span
                  className={cn(
                    'inline-flex size-16 shrink-0 items-center justify-center rounded-full text-white',
                    person.accent === 'red' ? 'bg-cta' : 'bg-charcoal',
                  )}
                >
                  <Users className="size-7" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-extrabold text-ink">{person.name}</h2>
                  <span className="mt-2 inline-block rounded-md bg-charcoal px-3 py-1 text-xs font-semibold text-white">
                    {person.role}
                  </span>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {person.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  )
}
