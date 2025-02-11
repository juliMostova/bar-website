import React, { useEffect, useState } from "react";
import "./EventsElStyle.css";
import { useTranslation } from "react-i18next";

import menuData from './../../../serverData/menuData.json';
import i18n from './../../../serverData/i18n/i18n';
import  translation from './../../../serverData/Translation.json';

function Events() {
  const [eventsCard, setEventsCard] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // //закоментувала поки данні не на сервері

    // const getEvent = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3001/menuEvents");
    //     const data = await response.json();
    //     setEventsCard(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching events:", error);
    //   }
    // };
    // getEvent();

    // return () => setEventsCard([]);

    setEventsCard(menuData.menuEvents);
  }, []);

  return (
    <div className="events-content">
      <h1>Events</h1>

      <div className="imageContent">
      
        <div className="photoCard">
          {eventsCard.map(({ category, items }, inx) => (
            <div key={inx} className="image_content">
              {items.map(({ id }, ind) => {
                const imagePath = t(`${id}.img`, { ns: "items" }); 
          

                return (
                  <div key={ind} className="item">
                    <div className="image">
                      <img
                        src={process.env.PUBLIC_URL + imagePath}
                        alt={t(`${id}.name`, { ns: "items" })}
                      />
                    </div>
                    <div className="item-name">
                      {t(`${id}.name`, { ns: "items" })}
                    </div>
                    <div className="item-description">
                      {t(`${id}.description`, { ns: "items" })}
                    </div>
                    <div className="time">
                      Time: {t(`${id}.time`, { ns: "items" })}
                    </div>
                    <div className="day">
                      dd/mm/yyyy: {t(`${id}.day`, { ns: "items" })}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default Events;


