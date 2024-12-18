import React, { useState, useEffect } from "react";
import "./FoodMenuStyle.css";
import menuPhoto from "./../../../assets/images/menu.jpg";
import { useTranslation } from "react-i18next";


function FoodMenu() {
  const [menuData, setMenuData] = useState([]);
  const { t } = useTranslation()

  useEffect(() => {

    const getApiMenu = async () => {
      try {
        const response = await fetch('http://localhost:3001/menuFood');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('foodMenu',data)
        setMenuData(data);
      } catch (error) {
        console.log("Error fetching menu:", error);
      }
    };
    getApiMenu();
  return () =>setMenuData([]);
  }, []);

  return (
    <div className="foodMenuContainer">
      <div
        className="foodMenuImage"
        style={{ backgroundImage: `url(${menuPhoto})` }}
      >
        <h1 className="menuTitle">Menus</h1>
      </div>
      {menuData.length > 0 && (
        <div className="menuContent">
          {menuData.map(({ category, items }, ind) => (
            <div key={ind} className="menu-category">
              <h3>
                {t(category, { ns: "categories" })}
              </h3>
              <div className="menu-items">
                {items.map(({ id }, inx) => (
                  <div key={id} className="menu-item">
                    <div className="item-name">
                      {t(`${id}.name`, { ns: "items" })}
                    </div>
                    <div className="item-description">
                      {t(`${id}.description`, { ns: "items" })}
                    </div>
                    <div className="item-price">
                      ${t(`${id}.price`, { ns: "items" })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodMenu;

