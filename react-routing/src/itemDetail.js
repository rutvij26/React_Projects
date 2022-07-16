import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
      images : {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();

    console.log(item.data.item);
    setItem(item.data.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.featured} alt=""/>
    </div>
  );
}

export default Item;
