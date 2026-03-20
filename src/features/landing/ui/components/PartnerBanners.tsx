import partnersImg from '../../../../assets/partners.png'

const PARTNER_CARD_KEYS = [0, 1] as const

export function PartnerBanners() {
  return (
    <section className="eco-partners" aria-labelledby="eco-partners-title">
      <h2 id="eco-partners-title" className="visually-hidden">
        Parceiros
      </h2>
      <div className="eco-partners__inner">
        <div className="eco-partners__grid">
          {PARTNER_CARD_KEYS.map((key) => (
            <article key={key} className="eco-partners__card">
              <div
                className="eco-partners__bg"
                style={{ backgroundImage: `url(${partnersImg})` }}
                aria-hidden
              />
              <div className="eco-partners__overlay" />
              <div className="eco-partners__content">
                <h3 className="eco-partners__heading">Parceiros</h3>
                <p className="eco-partners__text">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <a href="#parceiro" className="eco-partners__cta">
                  Confira
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
