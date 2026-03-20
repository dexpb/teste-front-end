import type { IconName } from '../../../../shared/types/icons'
import { Icon } from '../../../icons'
import logo from '../../../../assets/logo.png'

const SOCIAL_LINKS: { href: string; label: string; icon: IconName }[] = [
  { href: '#instagram', label: 'Instagram', icon: 'instagram' },
  { href: '#facebook', label: 'Facebook', icon: 'facebook' },
  { href: '#linkedin', label: 'LinkedIn', icon: 'linkedin' },
]

const FOOTER_COLUMNS: {
  heading: string
  links: { href: string; label: string }[]
}[] = [
  {
    heading: 'Institucional',
    links: [
      { href: '#sobre', label: 'Sobre Nós' },
      { href: '#movimento', label: 'Movimento' },
      { href: '#trabalhe', label: 'Trabalhe conosco' },
    ],
  },
  {
    heading: 'Ajuda',
    links: [
      { href: '#suporte', label: 'Suporte' },
      { href: '#fale', label: 'Fale Conosco' },
      { href: '#faq', label: 'Perguntas Frequentes' },
    ],
  },
  {
    heading: 'Termos',
    links: [
      { href: '#termos', label: 'Termos e Condições' },
      { href: '#privacidade', label: 'Política de Privacidade' },
      { href: '#troca', label: 'Troca e Devolução' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="eco-footer">
      <div className="eco-footer__grid">
        <div className="eco-footer__brand">
          <img src={logo} alt="Econverse" width={160} height={32} />
          <p className="eco-footer__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="eco-footer__social" aria-label="Redes sociais">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <li key={href}>
                <a href={href} aria-label={label}>
                  <Icon name={icon} size={22} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="eco-footer__cols">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="eco-footer__col">
              <h3 className="eco-footer__heading">{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="eco-footer__bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ·{' '}
          {new Date().getFullYear()} Econverse
        </p>
      </div>
    </footer>
  )
}
