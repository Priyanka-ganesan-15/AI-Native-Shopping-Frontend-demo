import { ConferenceProduct } from "../../data/products/conferenceProducts";

type SelectedProductsRailProps = {
  products: ConferenceProduct[];
  onAddToHanger: (product: ConferenceProduct) => void;
};

export default function SelectedProductsRail({ products, onAddToHanger }: SelectedProductsRailProps) {
  return (
    <div className="selected-rail" aria-label="Selected for this brief">
      {products.map((product) => (
        <article key={product.id} className="selected-product-card">
          <div
            className="selected-product-card__image"
            style={{ backgroundImage: `url(${product.image})` }}
            aria-hidden="true"
          >
            <div className="selected-product-card__image-overlay" />
          </div>

          <h3 className="selected-product-card__name">{product.name}</h3>
          <p className="selected-product-card__meta">{product.brand}</p>
          <p className="selected-product-card__meta">${product.price}</p>
          <p className="selected-product-card__reason">{product.reason}</p>

          <div className="selected-product-card__hover">
            <p className="selected-product-card__hover-title">Why We Chose This</p>
            <ul className="selected-product-card__highlights">
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <button type="button" className="selected-product-card__cta" onClick={() => onAddToHanger(product)}>
            Add to Hanger
          </button>
        </article>
      ))}
    </div>
  );
}
