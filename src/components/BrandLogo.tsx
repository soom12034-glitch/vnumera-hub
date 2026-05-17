type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
  subtitle?: string
}

const sizeMap = {
  sm: {
    mark: 'w-9 h-9',
    text: 'text-lg',
    subtitle: 'text-[10px]',
  },
  md: {
    mark: 'w-12 h-12',
    text: 'text-2xl',
    subtitle: 'text-xs',
  },
  lg: {
    mark: 'w-16 h-16',
    text: 'text-3xl',
    subtitle: 'text-sm',
  },
}

export default function BrandLogo({
  size = 'md',
  showText = true,
  className = '',
  subtitle = 'Digital Business Studio',
}: BrandLogoProps) {
  const styles = sizeMap[size]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${styles.mark} rounded-2xl bg-gradient-to-br from-primary-500 via-primary-400 to-emerald-400 shadow-[0_12px_30px_-18px_rgba(14,165,233,0.7)] flex items-center justify-center`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none">
          <path
            d="M18 46V18h7.5l13 16.8V18H46v28h-7.5l-13-16.8V46H18Z"
            fill="white"
          />
          <path
            d="M14 14h36"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="leading-tight">
          <div className={`font-bold tracking-tight text-slate-900 ${styles.text}`}>
            Numera
          </div>
          <div className={`text-slate-500 ${styles.subtitle}`}>{subtitle}</div>
        </div>
      )}
    </div>
  )
}
