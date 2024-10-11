import React from 'react';

function Products({ products }) {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
