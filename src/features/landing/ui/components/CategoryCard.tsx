import type { FC, SVGProps } from 'react'

type Props = {
  href: string
  label: string
  isActive: boolean
  onSelect: () => void
} & (
  | { iconSrc: string; Icon?: never }
  | { Icon: FC<SVGProps<SVGSVGElement>>; iconSrc?: never }
)

export function CategoryCard(props: Props) {
  const { href, label, isActive, onSelect, ...rest } = props
  const SvgIcon = 'Icon' in rest ? rest.Icon : null

  return (
    <li>
      <a
        href={href}
        className={`eco-categories__card${isActive ? ' eco-categories__card--active' : ''}`}
        aria-current={isActive ? 'page' : undefined}
        onClick={(e) => {
          e.preventDefault()
          onSelect()
        }}
      >
        <span className="eco-categories__icon-box" aria-hidden="true">
          {SvgIcon ? (
            <SvgIcon
              className="eco-categories__icon-img eco-categories__icon-img--svg"
              width={61}
              height={61}
              aria-hidden
            />
          ) : (
            <img
              src={'iconSrc' in rest ? rest.iconSrc : ''}
              alt=""
              className="eco-categories__icon-img"
              width={61}
              height={61}
              loading="lazy"
              decoding="async"
            />
          )}
        </span>
        <span className="eco-categories__card-label">{label}</span>
      </a>
    </li>
  )
}
