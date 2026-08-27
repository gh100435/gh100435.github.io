import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { brand, socialLinks } from '../data/profile'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { label: 'Skill', href: '#skills', id: 'skills' },
  { label: 'Demo', href: '#demo', id: 'demo' },
  { label: 'Legacy', href: '#legacy', id: 'legacy' },
]

const iconItems = socialLinks.filter((item) => item.label === 'GitHub')

function getNavLinkClass(isActive: boolean) {
  return isActive
    ? 'text-oc-coral transition-colors hover:text-oc-coral'
    : 'transition-colors hover:text-oc-coral'
}

type ThemeToggleButtonProps = {
  isDark: boolean
  onToggle: () => void
  className?: string
  showLabel?: boolean
}

function ThemeToggleButton({
  isDark,
  onToggle,
  className = '',
  showLabel = false,
}: ThemeToggleButtonProps) {
  const label = isDark ? 'Light mode' : 'Dark mode'

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      onClick={onToggle}
      className={[
        'inline-flex items-center justify-center gap-2 text-oc-muted transition-colors hover:text-oc-text',
        className,
      ].join(' ')}
    >
      {isDark ? (
        <FaSun className="h-3.5 w-3.5" />
      ) : (
        <FaMoon className="h-3.5 w-3.5" />
      )}
      {showLabel && <span>{label}</span>}
    </button>
  )
}

export function SiteHeader() {
  const { isDark, toggleTheme } = useTheme()
  // 현재 섹션 감지
  const [activeSection, setActiveSection] = useState('skills')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  // 모바일 메뉴 토글
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-oc-border bg-oc-header/75 text-oc-text backdrop-blur-md">
      <div className="mx-auto flex h-header max-w-oc-content items-center justify-between px-5 md:px-8">
        {/* 로고 홈 버튼 */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <img src="/favicon.svg" alt="" className="h-5 w-5" />
          <span className="font-sans text-[15px] font-bold tracking-[-0.01em]">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-mono text-[12px] tracking-[0.04em] text-oc-muted md:flex">
          {/* 기본 메뉴 */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={getNavLinkClass(activeSection === item.id)}
            >
              {item.label}
            </a>
          ))}

          {/* 아이콘 메뉴 */}
          {iconItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-oc-coral"
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </a>
            )
          })}

          {/* 다크 테마 토글 */}
          <ThemeToggleButton
            isDark={isDark}
            onToggle={toggleTheme}
            className="h-7 w-7"
          />
        </nav>

        {/* 모바일 메뉴 토글 버튼 */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-8 w-8 items-center justify-center text-oc-muted transition-colors hover:text-oc-text md:hidden"
        >
          {isMenuOpen ? (
            <FaXmark className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <nav className="border-t border-oc-border bg-oc-header/95 px-5 py-4 font-mono text-[12px] tracking-[0.04em] text-oc-muted md:hidden">
          <div className="flex flex-col gap-4">
            {/* 기본 메뉴 */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={getNavLinkClass(activeSection === item.id)}
              >
                {item.label}
              </a>
            ))}

            {/* 아이콘 메뉴 */}
            {iconItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                onClick={closeMenu}
                className="transition-colors hover:text-oc-coral"
              >
                {item.label}
              </a>
            ))}

            {/* 테마 토글 */}
            <ThemeToggleButton
              isDark={isDark}
              onToggle={toggleTheme}
              showLabel
              className="mx-auto w-fit"
            />
          </div>
        </nav>
      )}
    </header>
  )
}