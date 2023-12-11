import React from "react";
import { useParams } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheck,
  faTruck,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const SingleProductPage = ({ products }) => {
  const { title } = useParams(); // Get the product title from the URL params

  if (!products || !title) {
    // Handle the case where products or title is undefined
    return <div>Loading...</div>;
  }

  const product = products.find((p) => p.title === title);

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="body bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="container flex justify-between items-center py-16 px-8">
        <h1>Single Product Page</h1>
        <div className="product-details-container w-1/2 pr-8">
          <img
            src={`/Images/${product.category}/${product.title}.png`}
            alt={`Image for ${product.title}`}
          />
        </div>
        <div className="product-info-container w-1/2">
          <h1 className="text-white text-3xl font-bold mb-4">
            {product.title}
          </h1>
          <div className="text-gray-500 mb-4">
            <span className="font-bold">Category:</span> {product.category}
            <hr />
          </div>
          <div className="text-yellow-500 mb-5">
            <span className="font-bold">Rating:</span>{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="mr-1 stars"
              />
            ))}
          </div>
          <p className="text-gray-700">{product.description}</p>
          <div className="text-white1 mt-4">
            <p>
              <FontAwesomeIcon icon={faTruck} className="mr-2" />
              Fast delivery
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Free delivery on qualifying orders
            </p>
            <p>
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              3-year warranty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
