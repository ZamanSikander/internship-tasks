import { useContext, useState } from "react";
import { CartContext } from "./CartContext"; // Import CartContext
import { useNavigate, useLocation } from "react-router-dom";

const BuyNow = () => {
  const { cartItems } = useContext(CartContext); // Access cart items
  const [paymentInfo, setPaymentInfo] = useState({ name: '', cardNumber: '', address: '' });
  const navigate = useNavigate();
  const location = useLocation(); // Use location to get passed state
  const product = location.state?.product; // Get product from state

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!'); // Simulate successful payment
    // You can add real payment logic here or redirect to a thank you page
    navigate("/thankyou");
  };

  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold mb-6">Finalize Your Purchase</h1>

      {product && (
        <div className="mb-6 md:flex md:justify-between md:items-center">
          <img src={product.image} alt={product.title} className=" rounded-lg" width={200} height={200} />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-3">
            <span>{item.title} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between mt-4 font-bold text-xl">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Payment Information</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter your card number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter your shipping address"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BuyNow;
