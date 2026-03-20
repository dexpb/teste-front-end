export function Newsletter() {
  return (
    <section className="eco-newsletter" aria-labelledby="eco-newsletter-title">
      <div className="eco-newsletter__inner">
        <div className="eco-newsletter__text">
          <h2 id="eco-newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
            da Econverse.
          </p>
        </div>
        <form
          className="eco-newsletter__form"
          action="#"
          method="post"
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="eco-newsletter__fields">
            <div className="eco-newsletter__name-col">
              <label className="visually-hidden" htmlFor="newsletter-name">
                Nome
              </label>
              <input
                id="newsletter-name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                autoComplete="name"
              />
              <label className="eco-newsletter__terms">
                <input id="newsletter-terms" name="terms" type="checkbox" />
                <span>Aceito os termos e condições</span>
              </label>
            </div>
            <div className="eco-newsletter__email-col">
              <label className="visually-hidden" htmlFor="newsletter-email">
                E-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
              />
            </div>
            <button type="submit">Inscrever</button>
          </div>
        </form>
      </div>
    </section>
  )
}
