import React, { useState, useEffect } from "react";
import "./DrinkMenuStyle.css";
import shotsPhoto1 from "./../../../assets/images/wine1.jpg";



function DrinkMenu() {
  const [menuDrink, setMenuDrink] = useState([]);

  useEffect(() => {
    const getDrinkMenu = async () => {
      try {
        const response = await fetch("http://localhost:3001/menuDrink");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setMenuDrink(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getDrinkMenu();

    return () => setMenuDrink([]);
  }, []);

  return (
    <div className="drinkMenuContainer">
      <div
        className="drinkMenuImage"
        style={{ backgroundImage: `url(${shotsPhoto1})` }}
      >
        <h1 className="menuTitle">Menus</h1>
      </div>

      <div className="menuDrink">
        {
          menuDrink.map((category,inx)=>(
<div key={inx} className="drink-category">
  <h3>{category.category}</h3>
  <div className="drink-items">
    {
      category.items.map((item,ind)=>(
        <div key={ind} className="item">
<div className="item-name">{item.name}</div>
<div className="item-description">{item.description}</div>
{/* <div className="item-description1">{item.description1}</div>
<div className="item-description2">{item.description2}</div> */}
<div className="item-price">${item.price}</div>
{/* <div className="item-price1">${item.price1}</div>
<div className="item-price2">${item.price2}</div> */}
        </div>
      ))
    }
  </div>
</div>
          ))
        }
      </div>
    </div>
  );
}

export default DrinkMenu;
