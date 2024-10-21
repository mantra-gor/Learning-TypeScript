import React, { useState } from "react";

const ProductInfo: React.FC = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const sampleProduct: Product = {
    id: 5,
    name: "Surf Excel",
    price: 50,
  };

  const [products, setProducts] = useState<Product | null>(null);

  const handleClick = () => {
    setProducts(sampleProduct);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      {products && (
        <div>
          <p>{products.id}</p>
          <p>{products.name}</p>
          <p>{products.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
