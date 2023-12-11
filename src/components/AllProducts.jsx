import React, { useState } from "react";
import "./styles.css";
import products from "./products";

const Card = ({ color, title, imageSrc, description, category }) => (
  <div className="card">
    <div className="img-box">
      <img src={imageSrc} alt={`Image for ${title}`} />
    </div>
    <div className="content">
      <div className="flex items-center">
        <h2 className={`text-${color} font-bold text-2xl flex items-center`}>
          <div className="title-category-container">
            <span className="title">{title}</span>
            {/* <span className="category">Ctg: {category}</span> */}
          </div>
        </h2>
      </div>
      <p className="text-gray-700 mt-4">{description}</p>

      <a
        href={`/singleProductPage/${title}`}
        className={`btn-${color} font-semibold py-3 px-6 mt-4 inline-block text-white no-underline`}
      >
        View Details
      </a>
    </div>
  </div>
);

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  window.addEventListener("scroll", function () {
    var filterNav = document.querySelector(".filter-nav");
    var scrollPosition = window.scrollY;

    if (scrollPosition >= filterNav.offsetTop) {
      filterNav.classList.add("sticky");
    } else {
      filterNav.classList.remove("sticky");
    }
  });

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  console.log(products);
  return (
    <div className="body bg-gray-800 min-h-screen flex justify-center items-center filter-nav-wrapper">
      <nav className="filter-nav">
        <div
          id="facetedSearch"
          className="facetedSearch sidebarBlock"
          data-filters=""
        >
          <h2 className="facetedSearch__heading">Filter by</h2>
          <div className="filter-buttons">
            <button
              onClick={() => setSelectedCategory("All")}
              className={selectedCategory === "All" ? "active" : ""}
            >
              All Categories
            </button>
            <button
              onClick={() => setSelectedCategory("Arche Series")}
              className={selectedCategory === "Arche Series" ? "active" : ""}
            >
              <span>Arche Series</span>
            </button>
            <button
              onClick={() => setSelectedCategory("Keyer")}
              className={selectedCategory === "Keyer" ? "active" : ""}
            >
              <span>Keyer</span>
            </button>
            <button
              onClick={() => setSelectedCategory("Novo Conference System")}
              className={
                selectedCategory === "Novo Conference System" ? "active" : ""
              }
            >
              <span>Novo Conference System</span>
            </button>
            <button
              onClick={() => setSelectedCategory("Vector")}
              className={selectedCategory === "Vector" ? "active" : ""}
            >
              <span>Vector</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container relative flex flex-col justify-center items-center flex-wrap gap-8 md:gap-4 py-16 px-8 md:p-16">
        <h1 className="fixed top-0 left-0 right-0 bg-gray-600 text-white h-16 text-3xl flex items-center justify-center ">
          {selectedCategory} Products
        </h1>

        <div className="product-container mt-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.title}
              color="teal-500" // Replace with dynamic color based on product
              title={product.title}
              imageSrc={`/Images/${product.category}/${product.title}.png`}
              description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!`}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
