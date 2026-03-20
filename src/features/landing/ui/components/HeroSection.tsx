import heroBanner from '../../../../assets/banner.png'

export function HeroSection() {
  return (
    <section className="eco-hero" aria-labelledby="eco-hero-title">
      <div
        className="eco-hero__bg"
        style={{ backgroundImage: `url(${heroBanner})` }}
        role="img"
        aria-label="Banner promocional"
      />
      <div className="eco-hero__overlay" />
      <div className="eco-hero__content">
        <h1 id="eco-hero-title" className="eco-hero__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="eco-hero__subtitle"><span className="eco-hero__subtitle-highlight">50% Off</span> nos produtos</p>
        <a href="#produtos" className="eco-hero__cta">
          Ver produto
        </a>
      </div>
    </section>
  )
}
