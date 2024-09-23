/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../pages/CartContext';
const HomeMen = () => {
  const [products, setProducts] = useState([]);
  
  const { addToCart } = useContext(CartContext); 

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing?limit=3`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 container mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 ">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg flex flex-col h-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-auto flex justify-between border-t border-gray-200 pt-4">
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="text-blue-600 hover:text-blue-800 bg-slate-300 p-3 rounded-lg"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => navigate('/buy-now')}
                className="hover:text-blue-200 bg-slate-900 p-3 rounded-lg text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMen;
