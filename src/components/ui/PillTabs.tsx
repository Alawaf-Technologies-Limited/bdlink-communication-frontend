import { cn } from '@/lib/cn'

type Tab = { id: string; label: string }

type Props = {
  tabs: Tab[]
  activeId?: string
  onSelect?: (id: string) => void
  className?: string
}

export function PillTabs({ tabs, activeId, onSelect, className }: Props) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-2 border-b border-border bg-surface px-5 py-4 sm:px-8 lg:px-16',
        className,
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const active = activeId === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => {
              onSelect?.(tab.id)
              document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className={cn(
              'rounded-full px-4 py-2 text-left text-xs font-semibold transition-colors sm:text-sm',
              active
                ? 'bg-charcoal text-white'
                : 'bg-surface-muted text-ink-muted hover:bg-border hover:text-ink',
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
