import './ListProducts.css';

const ListProducts = ({ products, isLogedIn, onAddToCart }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <a href="#">
            <img src={product.image} alt={product.title} className="product-image" />
          </a>
          <div className="product-content">
            <h5 className="product-title">{product.title}</h5>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="price">${product.price}</span>
              <span className="rating-badge">{product.rating.rate}</span>
              {isLogedIn && (
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
