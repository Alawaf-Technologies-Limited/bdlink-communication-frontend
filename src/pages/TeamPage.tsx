import { Users, Network, FileText, Layers, ShieldCheck, type LucideIcon } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/layout/Container'
import { TEAM_DEPARTMENTS, type TeamIcon } from '@/data/site'

const icons: Record<TeamIcon, LucideIcon> = {
  users: Users,
  network: Network,
  file: FileText,
  layers: Layers,
  shield: ShieldCheck,
}

export function TeamPage() {
  return (
    <>
      <PageHero
        title="Team"
        image="/assets/heroes/team-hero.jpg"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Team' },
        ]}
      />

      <section className="bg-surface py-16">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_DEPARTMENTS.map((dept) => {
            const Icon = icons[dept.icon]
            return (
              <article
                key={dept.title}
                className="rounded-[var(--radius-card)] border border-border bg-white p-8 shadow-soft"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-cta text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink">{dept.title}</h2>
              </article>
            )
          })}
        </Container>
      </section>
    </>
  )
}
