import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Container } from './Container'
import { cn } from '@/lib/cn'

export type Crumb = { label: string; to?: string }

type Props = {
  title: string
  image: string
  crumbs?: Crumb[]
  children?: ReactNode
  compact?: boolean
}

export function PageHero({ title, image, crumbs = [], children, compact }: Props) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15"
        aria-hidden
      />
      <Container
        className={cn(
          'relative z-10',
          compact ? 'pb-12 pt-28 sm:pb-16 sm:pt-32' : 'pb-14 pt-28 sm:pb-20 sm:pt-36',
        )}
      >
        <h1 className="font-sans text-3xl font-extrabold uppercase tracking-wide sm:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-3xl border-l-[3px] border-cta pl-4 text-sm leading-relaxed text-white/90 sm:text-base">
            {children}
          </div>
        ) : null}
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mt-8 text-xs text-white/70 sm:text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>›</span> : null}
                  {c.to ? (
                    <Link to={c.to} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-white">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
      </Container>
      <div className="brand-divider relative z-10" />
    </section>
  )
}
