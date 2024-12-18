import React, { useEffect, useState } from "react";
import "./EventsElStyle.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useTranslation } from "react-i18next";


function Events() {
  const [eventsCard, setEventsCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {t} = useTranslation();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await fetch("http://localhost:3001/menuEvents");
        const data = await response.json();
        setEventsCard(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getEvent();

    return () => setEventsCard([]);
  }, []);

  const allEvents = eventsCard.flatMap((category) =>
    category.items.filter(
      (card) => card.time !== "00pm-00pm" && card.day !== "00.00.00"
    )
  );

  const nextElem = () => {
    setCurrentIndex((prevElem) =>
      prevElem + 1 < allEvents.length ? prevElem + 1 : 0
    );
  };

  const prevElem = () => {
    setCurrentIndex((prevElem) =>
      prevElem - 1 >= 0 ? prevElem - 1 : allEvents.length - 1
    );
  };

  if (allEvents.length === 0) {
    return (
      <div className="events-content">
        <h1>Events</h1>
        <p className="eventsNo">No events available yet</p>
      </div>
    );
  }

  return (
    <div className="events-content">
      <h1>Events</h1>
      <div className="imageContent">
        <IoIosArrowRoundBack className="arrowLeft" onClick={prevElem} />
        <div className="photoCard">
          <img
            src={allEvents[currentIndex].img}
            alt={allEvents[currentIndex].name}
          />
          <span className="name">{allEvents[currentIndex].name}</span>
          <p>{allEvents[currentIndex].description}</p>
          <span>Time: {allEvents[currentIndex].time}</span>
          <span>Day: {allEvents[currentIndex].day}</span>
        </div>
        <IoIosArrowRoundForward className="arrowRight" onClick={nextElem} />
      </div>
    </div>
  );
}

export default Events;


// function Events() {
//   const [eventsCard, setEventsCard] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const {t} = useTranslation();

//   useEffect(() => {
//     const getEvent = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/menuEvents");
//         const data = await response.json();
//         setEventsCard(data);
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

//   const nextElem = () => {
//     setCurrentIndex((prevElem) =>
//       prevElem + 1 < allEvents.length ? prevElem + 1 : 0
//     );
//   };

//   const prevElem = () => {
//     setCurrentIndex((prevElem) =>
//       prevElem - 1 >= 0 ? prevElem - 1 : allEvents.length - 1
//     );
//   };

//   if (allEvents.length === 0) {
//     return (
//       <div className="events-content">
//         <h1>Events</h1>
//         <p className="eventsNo">No events available yet</p>
//       </div>
//     );
//   }

//   return (
//     <div className="events-content">
//       <h1>Events</h1>
//       <div className="imageContent">
//         <IoIosArrowRoundBack className="arrowLeft" onClick={prevElem} />
//         <div className="photoCard">
//           <img
//             src={allEvents[currentIndex].img}
//             alt={allEvents[currentIndex].name}
//           />
//           <span className="name">{allEvents[currentIndex].name}</span>
//           <p>{allEvents[currentIndex].description}</p>
//           <span>Time: {allEvents[currentIndex].time}</span>
//           <span>Day: {allEvents[currentIndex].day}</span>
//         </div>
//         <IoIosArrowRoundForward className="arrowRight" onClick={nextElem} />
//       </div>
//     </div>
//   );
// }

// export default Events;
