import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const controller = new AbortController();

    axios
      .get('http://localhost:4000/hats')
      .then(({ data }) => setProducts(data))
      .catch((error) => console.error(error.message));

    // return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {/* <ul>{[<li>1</li>, <li>2</li>, , <li>2</li>]}</ul> */}
      <ul>
        {products.map((product) => {
          console.log(product);
          return (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt="" />
              <span>{product.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
