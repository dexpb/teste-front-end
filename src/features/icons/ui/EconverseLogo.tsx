import type { SVGProps } from 'react'

const BRAND_YELLOW = '#ffdd00'
const BRAND_NAVY = '#3442b5'

const sans =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export function EconverseLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 132 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="18" cy="18" r="18" fill={BRAND_YELLOW} />
      <text
        x="18"
        y="18"
        dy="0.35em"
        textAnchor="middle"
        fill="#fff"
        style={{
          fontFamily: sans,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        e
      </text>
      <text
        x="42"
        y="18"
        dy="0.35em"
        fill={BRAND_NAVY}
        style={{
          fontFamily: sans,
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: '-0.03em',
        }}
      >
        converse
      </text>
    </svg>
  )
}
