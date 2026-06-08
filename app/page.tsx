export default function Page() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <p className="home-hero__eyebrow">Curated Shopping</p>
        <h1 id="home-hero-title" className="home-hero__title">
          Designed Around Your Style.
        </h1>
        <p className="home-hero__subtitle">
          Tell us what you are looking for and discover pieces curated specifically for you.
        </p>

        <div className="home-search" role="search" aria-label="Conversational shopping search">
          <input className="home-search__input" type="text" placeholder="What are you shopping for today?" />
        </div>

        <ul className="home-hero__examples" aria-label="Search examples">
          <li>Summer wedding in Italy</li>
          <li>Capsule wardrobe for work</li>
          <li>Mid-century living room refresh</li>
          <li>Gifts for a design lover</li>
        </ul>
      </section>

      <section className="home-collections" aria-labelledby="home-collections-title">
        <h2 id="home-collections-title" className="home-section-title">
          Discovery Collections
        </h2>
        <div className="home-collections__grid">
          <article className="home-tile">Spring Linen Edit</article>
          <article className="home-tile">Weekend Escape</article>
          <article className="home-tile">Quiet Luxury</article>
          <article className="home-tile">Earth Tones</article>
        </div>
      </section>

      <section className="home-feed" aria-labelledby="home-feed-title">
        <h2 id="home-feed-title" className="home-section-title">
          Curated For You
        </h2>
        <div className="home-feed__masonry">
          <div className="home-feed__item" />
          <div className="home-feed__item home-feed__item--tall" />
          <div className="home-feed__item" />
          <div className="home-feed__item" />
        </div>
      </section>
    </div>
  );
}
