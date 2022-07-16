import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const Data = await fetch("https://fortnite-api.theapinetwork.com/store/get");
    const items = await Data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h1>
      ))}
    </div>
  );
}

export default Shop;
