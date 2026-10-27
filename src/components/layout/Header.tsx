import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from './Container'
import { COMPANY, PRIMARY_NAV, type NavItem } from '@/data/site'
import { cn } from '@/lib/cn'
import { telHref } from '@/lib/phone'

function navLinkClass(active: boolean) {
  return cn(
    'relative px-1.5 py-1 text-[13px] font-medium transition-colors xl:px-2 xl:text-sm',
    active
      ? 'text-white after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:bg-white'
      : 'text-white/85 hover:text-white',
  )
}

function isItemActive(item: NavItem, pathname: string) {
  if (!item.children) return false
  const base = item.to.split('#')[0]
  return (
    pathname.startsWith(base) ||
    item.children.some((child) => pathname === child.to.split('#')[0])
  )
}

export function Header() {
  const { pathname, hash } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuId = useId()

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="hidden border-b border-white/10 bg-black/55 text-xs sm:block">
        <Container className="flex justify-end gap-5 py-2 text-white/85">
          <a href={telHref(COMPANY.pabx)} className="hover:text-white">
            IP PABX: <strong className="font-semibold">{COMPANY.pabx}</strong>
          </a>
          <a href={telHref(COMPANY.mobile)} className="hover:text-white">
            Mobile: <strong className="font-semibold">{COMPANY.mobile}</strong>
          </a>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
            Email: <strong className="font-semibold">{COMPANY.email}</strong>
          </a>
        </Container>
      </div>

      <div className="bg-gradient-to-b from-black/70 to-transparent">
        <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
          <Logo />

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1.5"
            aria-label="Primary"
          >
            {PRIMARY_NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={cn(navLinkClass(isItemActive(item, pathname)), 'inline-flex items-center gap-1')}
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-80" aria-hidden />
                  </button>
                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-white/10 bg-charcoal py-2 shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm text-white/85 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink to="/contact" size="sm" className="hidden sm:inline-flex">
              Contact Us
            </ButtonLink>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </div>

      {mobileOpen ? (
        <div
          id={menuId}
          className="fixed inset-0 z-[60] flex flex-col bg-charcoal-deep lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pb-8" aria-label="Mobile">
            <ul className="space-y-1">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label} className="border-b border-white/10">
                  {item.children ? (
                    <details className="group py-1">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold">
                        {item.label}
                        <ChevronDown className="size-4 transition group-open:rotate-180" />
                      </summary>
                      <ul className="space-y-1 pb-3 pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link to={child.to} className="block py-2 text-sm text-white/80 hover:text-white">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link to={item.to} className="block py-3 text-base font-semibold">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <a href={telHref(COMPANY.pabx)} className="flex items-center gap-2">
                <Phone className="size-4 text-cta" />
                {COMPANY.pabx}
              </a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>

            <ButtonLink to="/contact" className="mt-8 w-full" size="lg">
              Contact Us
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
