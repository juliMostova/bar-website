import React, { useState, useEffect } from "react";
import "./DrinkMenuStyle.css";
import shotsPhoto1 from "./../../../assets/images/wine1.jpg";
import { useTranslation } from "react-i18next";

function DrinkMenu() {
  const [menuDrink, setMenuDrink] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getDrinkMenu = async () => {
      try {
        const response = await fetch("http://localhost:3001/menuDrink");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenuDrink(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getDrinkMenu();

    return () => setMenuDrink([]);
  }, []);

  const filterPrise = ["Wines by the Glass Sparkling", "White", "Red"];
  const categoryWithMl = "Large Format Cocktails";

  return (
    <div className="drinkMenuContainer">
      <div
        className="drinkMenuImage"
        style={{ backgroundImage: `url(${shotsPhoto1})` }}
      >
        <h1 className="menuTitle">Menus</h1>
      </div>

      <div className="menuDrink">
        {menuDrink.map(({ category, items }, inx) => (
          <div key={inx} className="drink-category">
            <h3>{t(category, { ns: "categories" })}</h3>
            <div className="drink-items">
              {items.map(({ id }, ind) => (
                <div key={ind} className="item">
                  <div className="item-name">
                    {t(`${id}.name`, { ns: "items" })}
                  </div>
                  <div className="item-description">
                    {filterPrise.includes(category.trim()) ? (
                      <>
                        {t(`${id}.description1`, { ns: "items" }) &&
                          t(`${id}.description1`, { ns: "items" }) !==
                            `${id}.description1` && (
                            <div>
                              {t(`${id}.description1`, { ns: "items" })}
                            </div>
                          )}
                        {t(`${id}.description2`, { ns: "items" }) &&
                          t(`${id}.description2`, { ns: "items" }) !==
                            `${id}.description2` && (
                            <div>
                              {t(`${id}.description2`, { ns: "items" })}
                            </div>
                          )}
                      </>
                    ) : (
                      <>
                        {t(`${id}.description`, {
                          ns: "items",
                          defaultValue: "",
                        }) &&
                          t(`${id}.description`, { ns: "items" }) !==
                            `${id}.description` && (
                            <div>{t(`${id}.description`, { ns: "items" })}</div>
                          )}
                      </>
                    )}
                  </div>
                  <div className="item-price">
                    {filterPrise.includes(category.trim()) ? (
                      <>
                        <div>${t(`${id}.price1`, { ns: "items" })}</div>
                        <div>${t(`${id}.price2`, { ns: "items" })}</div>
                      </>
                    ) : (
                      <>
                        <div>${t(`${id}.price`, { ns: "items" })}</div>
                      </>
                    )}
                  </div>
                  {category.category === categoryWithMl && (
                    <div className="item-ml">
                      {t(`${id}.ml`, { ns: "items" })}ml
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrinkMenu;
