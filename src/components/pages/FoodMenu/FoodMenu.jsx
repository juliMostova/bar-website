import React, { useState, useEffect } from "react";
import "./FoodMenuStyle.css";
import menuPhoto from "./../../../assets/images/menu.jpg";

function FoodMenu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const getApiMenu = async () => {
      try {
        const response = await fetch("http://localhost:3001/menuFood");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setMenuData(data);
      } catch (error) {
        console.log("Error fetching menu:", error);
      }
    };
    getApiMenu();

    return () => setMenuData([]);
  }, []);

  return (
    <div className="foodMenuContainer">
      <div
        className="foodMenuImage"
        style={{ backgroundImage: `url(${menuPhoto})` }}
      >
        <h1 className="menuTitle">Menus</h1>
      </div>

      <div className="menuContent">
        {menuData.map((category, ind) => (
          <div key={ind} className="menu-category">
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, inx) => (
                <div key={inx} className="menu-item">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                  <div className="item-price">${item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;





// function FoodMenu() {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     const getApiMenu = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/menuFood");

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         setMenuData(data);
//       } catch (error) {
//         console.log("Error fetching menu:", error);
//       }
//     };
//     getApiMenu();

//     return () => setMenuData([]);
//   }, []);

//   return (
//     <div className="foodMenuContainer">
//       <div
//         className="foodMenuImage"
//         style={{ backgroundImage: `url(${menuPhoto})` }}
//       >
//         <h1 className="menuTitle">Menus</h1>
//       </div>

//       <div className="menuContent">
//         {menuData.map((category, ind) => (
//           <div key={ind} className="menu-category">
//             <h3>{category.category}</h3>
//             <div className="menu-items">
//               {category.items.map((item, inx) => (
//                 <div key={inx} className="menu-item">
//                   <div className="item-name">{item.name}</div>
//                   <div className="item-description">{item.description}</div>
//                   <div className="item-price">${item.price}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FoodMenu;