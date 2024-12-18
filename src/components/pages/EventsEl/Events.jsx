import React, { useEffect, useState } from "react";
import "./EventsElStyle.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useTranslation } from "react-i18next";



function Events() {
  const [eventsCard, setEventsCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await fetch("http://localhost:3001/menuEvents");
        const data = await response.json();
        setEventsCard(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvent();

    return () => setEventsCard([]); // clear events on component unmount
  }, []);

  const allEvents = eventsCard.flatMap((category) =>
    category.items.filter(
      (card) => card.time !== "00pm-00pm" && card.day !== "00.00.00"
    )
  );

  const nextEvent = () => {
    setCurrentIndex((prevElem) => (prevElem + 1 < allEvents.length ? prevElem + 1 : 0));
  };

  const prevEvent = () => {
    setCurrentIndex((prevElem) => (prevElem - 1 >= 0 ? prevElem - 1 : allEvents.length - 1));
  };

  if (allEvents.length === 0) {
    return (
      <div className="events-content">
        <h1>Events</h1>
        <p className="eventsNo">No events available yet</p>
      </div>
    );
  }

  const currEvent = allEvents[currentIndex];

  return (
    <div className="events-content">
      <h1>Events</h1>
      <div className="imageContent">
        <IoIosArrowRoundBack className="arrowLeft" onClick={prevEvent} />
        <div key={currEvent.id} className="photoCard">
          <img
            src={t(`${currEvent.id}.img`, { ns: "items" })}
            alt={t(`${currEvent.id}.name`, { ns: "items" })}
          />
          <span className="name">{t(`${currEvent.id}.name`, { ns: "items" })}</span>
          <p>{t(`${currEvent.id}.description`, { ns: "items" })}</p>
          <span>Time: {t(`${currEvent.id}.time`, { ns: "items" })}</span>
          <span>Day: {t(`${currEvent.id}.day`, { ns: "items" })}</span>
        </div>
        <IoIosArrowRoundForward className="arrowRight" onClick={nextEvent} />
      </div>
    </div>
  );
}

export default Events;









// function Events() {
//   const [eventsCard, setEventsCard] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const getEvent = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/menuEvents");
//         const data = await response.json();
//         setEventsCard(data);
//         console.log("events", data);
//       } catch (error) {
//         console.log("Error", error);
//       }
//     };
//     getEvent();

//     return () => setEventsCard([]);
//   }, []);

//   const allEvents = eventsCard.flatMap((category) =>
//     category.items.filter(
//       (card) => card.time !== "00pm-00pm" && card.day !== "00.00.00"
//     )
//   );

//   const nextEvent = () => {
// setCurrentIndex((prevElem)=>
//   prevElem +1 < allEvents.length ? prevElem +1 :0
// )

//   };

//   const prevEvent = () => {
//     setCurrentIndex((prevElem)=>
//       prevElem -1 >=0 ?prevElem-1: allEvents.length-1
//     )
//   };



//   if (allEvents.length === 0) {
//     return (
//       <div className="events-content">
//         <h1>Events</h1>
//         <p className="eventsNo">No events available yet</p>
//       </div>
//     );
//   }
// const currEvent = allEvents[currentIndex];
//   return (
//     <div className="events-content">
//       <h1>Events</h1>
//       <div className="imageContent">
//         <IoIosArrowRoundBack className="arrowLeft" onClick={prevEvent} />
      
//           <div key={currEvent.id} className="photoCard">
//             <img
//               src={t(`${currEvent.id}.img`, { ns: "items" })}
//               alt={t(`${currEvent.id}.name`, { ns: "items" })}
//             />
//             <span className="name">{t(`${currEvent.id}.name`, { ns: "items" })}</span>
//             <p>{t(`${currEvent.id}.description`, { ns: "items" })}</p>
//             <span>Time: {t(`${currEvent.id}.time`, { ns: "items" })}</span>
//             <span>Day: {t(`${currEvent.id}.day`, { ns: "items" })}</span>
//           </div>
       

//         <IoIosArrowRoundForward className="arrowRight" onClick={nextEvent} />
//       </div>
//     </div>
//   );
// }

// export default Events;



