import logo from '../../../../assets/logo.png'

export function BrandsStrip() {
  return (
    <section className="eco-brands" id="marcas" aria-labelledby="eco-brands-title">
      <div className="eco-brands__inner">
        <h2 id="eco-brands-title" className="eco-section-heading eco-brands__title">
          Navegue por marcas
        </h2>
        <ul className="eco-brands__list">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <a
                href="#marcas"
                className="eco-brands__bubble"
                aria-label={`Marca ${i + 1}`}
              >
                <img
                  src={logo}
                  alt=""
                  className="eco-brands__logo"
                  width={117}
                  height={34.76}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
