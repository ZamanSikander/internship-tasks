import { useContext } from "react";
import { CartContext } from "../pages/CartContext"; // Import CartContext
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cart items and removeFromCart from context
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-lg shadow-lg md:w-[40vw] lg:w-[50vw]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <h2 className="text-lg font-bold mt-2">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 bg-slate-300 p-3 rounded-lg"
                  onClick={() => removeFromCart(item.id)} // Call removeFromCart with the item ID
                >
                  Remove Item
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/buy-now")} // Use an absolute path to navigate to the BuyNow page
                  className="text-white hover:bg-slate-600 bg-slate-800 p-3 rounded-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
