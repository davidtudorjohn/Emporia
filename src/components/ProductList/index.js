import React, { useState } from "react";
import ProductCard from "../ProductCard";
import data from "../../data";
import "./productlist.css";
const ProductList = props => {
  const [query, setQuery] = useState("");

  let filteredItems = data[props.dataCategory].filter(item => {
    return item.name.toLowerCase().indexOf(query) !== -1;
  });

  //   console.log(filteredItems);
  // let allProducts = [];

  // for (var category in data) {
  //   let productsInCategory = data[category];
  //   for (let i = 0; i < productsInCategory.length; i++) {
  //     allProducts.push(productsInCategory[i]);
  //   }
  // }
  // console.log(allProducts);

  const handleQuery = e => {
    e.preventDefault();
  };
  return (
    <div className="productList">
      <h2 className="pageTitle">{props.pageTitle}</h2>
      {props.noSearch ? (
        ""
      ) : (
        <form id="searchForm" name="searchForm" onSubmit={handleQuery}>
          <input
            type="text"
            placeholder={`Search ${props.pageTitle}`}
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
        </form>
      )}
      <div className="productsWrap">
        {props.dataCategory && filteredItems.length === 0 && (
          <h5>No products found</h5>
        )}
        {filteredItems && props.dataCategory
          ? filteredItems.map(p => (
              <ProductCard
                key={p.id}
                id={p.id}
                category={p.category}
                image={p.image}
                name={p.name}
                price={p.price}
                rating={p.rating}
                description={p.description}
                reviews={p.reviews}
              />
            ))
          : data[props.dataCategory].map(p => (
              <ProductCard
                key={p.id}
                id={p.id}
                category={p.category}
                image={p.image}
                name={p.name}
                price={p.price}
                rating={p.rating}
                description={p.description}
                reviews={p.reviews}
              />
            ))}
        {/* {props.allProducts &&
          allProducts.map(p => (
            <ProductCard
              key={p.id}
              id={p.id}
              category={p.category}
              image={p.image}
              name={p.name}
              price={p.price}
              reviews={p.reviews}
            />
          ))} */}
      </div>
    </div>
  );
};
export default ProductList;
