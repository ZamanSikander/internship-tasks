
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been placed successfully.
        </p>
        <p className="text-gray-600 mb-8">
          We appreciate your business and hope you enjoy your purchase!
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
