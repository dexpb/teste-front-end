import type { ReactNode } from "react";

import type { IconName } from "../../../../shared/types/icons";
import logo from "../../../../assets/logo.png";
import { Icon } from "../../../icons";

const HEADER_TOP_ITEMS: { icon: IconName; content: ReactNode }[] = [
  {
    icon: "shieldCheck",
    content: (
      <>
        Compra <strong>100% segura</strong>
      </>
    ),
  },
  {
    icon: "truck",
    content: (
      <>
        <strong>Frete grátis </strong>acima de R$ 200
      </>
    ),
  },
  {
    icon: "creditCard",
    content: (
      <>
        <strong>Parcele</strong> em até 10x
      </>
    ),
  },
];

const HEADER_TOOLBAR: { ariaLabel: string; icon: IconName }[] = [
  { ariaLabel: "Meus pedidos", icon: "box" },
  { ariaLabel: "Favoritos", icon: "heart" },
  { ariaLabel: "Minha conta", icon: "accountCircle" },
  { ariaLabel: "Carrinho de compras", icon: "shoppingCart" },
];

type NavEntry =
  | { href: string; label: string }
  | { href: string; label: string; highlight: true }
  | { href: string; label: string; icon: IconName };

const NAV_ITEMS: NavEntry[] = [
  { href: "#categorias", label: "Todas categorias" },
  { href: "#ofertas", label: "Supermercado" },
  { href: "#outros", label: "Livros" },
  { href: "#parceiro", label: "Moda" },
  { href: "#ajuda", label: "Lançamentos" },
  { href: "#ajuda", label: "Ofertas do dia", highlight: true },
  { href: "#assinatura", label: "Assinatura", icon: "crownSimple" },
];

type SiteHeaderProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function SiteHeader({ searchQuery, onSearchChange }: SiteHeaderProps) {
  return (
    <header className="eco-header">
      <div className="eco-header__top">
        <div className="eco-header__top-inner">
          {HEADER_TOP_ITEMS.map(({ icon, content }) => (
            <p key={icon} className="eco-header__top-item">
              <Icon name={icon} size={20} aria-hidden />
              <span>{content}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="eco-header__main">
        <div className="eco-header__main-inner">
          <a
            href="/"
            className="eco-header__logo-link"
            aria-label="Econverse — página inicial"
          >
            <img
              src={logo}
              alt=""
              width={160}
              height={32}
              className="eco-header__logo-img"
            />
          </a>

          <div className="eco-header__search" role="search">
            <label className="visually-hidden" htmlFor="eco-search">
              O que você está buscando?
            </label>
            <input
              id="eco-search"
              type="search"
              name="q"
              placeholder="O que você está buscando?"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-controls="produtos"
              aria-describedby="eco-search-hint"
            />
            <span id="eco-search-hint" className="visually-hidden">
              Os resultados aparecem na vitrine de produtos abaixo ao digitar.
            </span>
            <span className="eco-header__search-icon-wrap" aria-hidden>
              <Icon
                name="search"
                className="eco-header__search-icon"
                size={28}
                color={"#9F9F9F"}
                aria-hidden
              />
            </span>
          </div>

          <div
            className="eco-header__actions"
            role="toolbar"
            aria-label="Atalhos da loja"
          >
            {HEADER_TOOLBAR.map(({ ariaLabel, icon }) => (
              <button
                key={ariaLabel}
                type="button"
                className="eco-icon-btn"
                aria-label={ariaLabel}
              >
                <Icon name={icon} size={22} color={"#9F9F9F"} aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="eco-header__nav" aria-label="Menu principal">
        <ul className="eco-header__nav-list">
          {NAV_ITEMS.map((item, index) => {
            const key = `${item.href}-${item.label}-${index}`;
            if ("highlight" in item && item.highlight) {
              return (
                <li key={key}>
                  <a href={item.href} style={{ color: "#3019B2" }}>
                    {item.label}
                  </a>
                </li>
              );
            }
            if ("icon" in item && item.icon) {
              return (
                <li key={key}>
                  <a href={item.href} className="eco-header__nav-link--with-icon">
                    <Icon
                      name={item.icon}
                      size={16}
                      aria-hidden
                      className="eco-header__nav-icon"
                    />
                    {item.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={key}>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
