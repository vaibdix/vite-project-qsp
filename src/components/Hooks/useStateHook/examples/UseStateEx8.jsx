import { useState } from 'react';
import './UseStateEx8.css';

const UseStateEx8 = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 79.99,
      stock: 150,
      image:
        'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Smartphone',
      category: 'Electronics',
      price: 299.99,
      stock: 85,
      image:
        'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Coffee Maker',
      category: 'Home Appliances',
      price: 49.99,
      stock: 200,
      image:
        'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Running Shoes',
      category: 'Sportswear',
      price: 59.99,
      stock: 120,
      image:
        'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'Digital Camera',
      category: 'Electronics',
      price: 499.99,
      stock: 60,
      image:
        'https://images.pexels.com/photos/327185/pexels-photo-327185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]);

  return (
    <div className="container">
      <h3>Product Catalog</h3>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-content">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <h3 className="card-title">{product.name}</h3>
              <div className="card-details">
                <p>
                  <span>Category:</span> {product.category}
                </p>
                <p>
                  <span>Price:</span> ${product.price}
                </p>
                <p>
                  <span>Stock:</span> {product.stock} units
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseStateEx8;
