import React, { useState } from "react";
import Filters from "./Filter.js";
import Item from "./Item.js"; 

function ShoppingList({ items = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div>
      <div className="items">
      <Filters onCategoryChange={setSelectedCategory} />
      <Item items={filteredItems} />
    </div>
    </div>

  );
}

export default ShoppingList;
