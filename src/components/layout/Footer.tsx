import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { Container } from './Container'
import { COMPANY, FOOTER_COLUMNS } from '@/data/site'
import { telHref } from '@/lib/phone'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="h-1 bg-cta" />
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 font-display text-lg font-semibold tracking-tight">
            {COMPANY.tagline}
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
            Contact Us
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            <li>
              IP PABX:{' '}
              <a href={telHref(COMPANY.pabx)} className="hover:text-white">
                {COMPANY.pabx}
              </a>
            </li>
            <li>
              Mobile:{' '}
              <a href={telHref(COMPANY.mobile)} className="hover:text-white">
                {COMPANY.mobile}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4">
        <Container className="flex flex-col items-center justify-center gap-3 text-center text-xs text-white/55 sm:flex-row sm:gap-4">
          <p>Copyright © {COMPANY.name} {year}. All Rights Reserved.</p>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <p className="inline-flex items-center gap-2">
            <span>Developed by</span>
            <img
              src="/assets/logo/alawaf.jpg"
              alt="al awaf"
              className="h-5 w-auto rounded-sm bg-white object-contain px-1.5 py-0.5"
            />
          </p>
        </Container>
      </div>
    </footer>
  )
}
