import React, { useState, useEffect } from "react";
import "./MainContantStyle.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Location from "./../Location/Location";
import HoursWork from "./../HoursWork/HoursWork";
import blockImg2 from "./../../assets/images/1.jpg";

function MainContent({ isModal, setIsModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    console.log("Дані форми:", data); //Ці данні відправити на сервер
    setIsModal(false);
  };

  useEffect(() => {
    const getTitle = async () => {
      try {
        const resp = await fetch("http://localhost:3001/headSectionMenu");
        const response = await resp.json();
        setData(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getTitle();
  }, []);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsModal(false);
    }, 500);
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((line, ind) => <p key={ind}>{line}</p>);
    } else if (description) {
      return <p>{description}</p>;
    }
    return null;
  };

  return (
    <motion.div
      className="mainSection"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {isModal && (
        <div className="modalBackdrop">
          <form
            className={`formSubmit ${isClosing ? "closing" : ""}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Don't Miss Out</h1>
            <p>Sign up now to receive updates on all things NOMAD.</p>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Email *"
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            <button type="submit">SUBMIT</button>
            <IoIosCloseCircleOutline
              className="closeIcon"
              onClick={handleCloseModal}
            />
          </form>
        </div>
      )}
      <div className="blockWith-img">
        <img src={blockImg2} alt="bear" />
      </div>
      <div className="blockWith-p">
        {data.map((category) =>
          category.items.map(({ id }, inx) => {
            const description = t(`${id}.description`, { ns: "items" });
            return (
              <div key={inx}>
                <h1>{t(`${id}.name`, { ns: "items" })}</h1>
                {renderDescription(description)}

                <div className="locationDiv">
                  <HoursWork
                    hours={t(`${id}.workDay`, { ns: "items" })}
                    time={t(`${id}.workDayTime`, { ns: "items" })}
                    happyHour={t(`${id}.happyHourDay`, { ns: "items" })}
                    happyHourTime={t(`${id}.happyHourTime`, { ns: "items" })}
                  />
                  <div className="lock">
                    <Location
                      address={"Enter on ground level of Hotel 1000"}
                      googleMapsLink={
                        "https://www.google.com/maps/search/?api=1&query=308+N+Randolph+Street,+Champaign,+ILL+61820"
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}

export default MainContent;

// import React, { useState, useEffect } from "react";
// import "./MainContantStyle.css";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// import Location from "./../Location/Location";
// import HoursWork from "./../HoursWork/HoursWork";
// import blockImg2 from "./../../assets/images/1.jpg";

// function MainContent({ isModal, setIsModal }) {
//   const [isClosing, setIsClosing] = useState(false);
//   const {t} = useTranslation();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [data, setData] = useState([]);

//   const onSubmit = (data) => {
//     console.log("Дані форми:", data); //Ці данні відправити на сервер
//     setIsModal(false);
//   };

//   useEffect(() => {
//     const getTitle = async () => {
//       try {
//         const resp = await fetch("http://localhost:3001/headSectionMenu");
//         const response = await resp.json();
//         setData(response);
//       } catch (error) {
//         console.log("Error", error);
//       }
//     };
//     getTitle();
//     return () => setData([]);
//   }, []);

//   const handleCloseModal = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsClosing(false);
//       setIsModal(false);
//     }, 500);
//   };
//   return (
//     <motion.div
//       className="mainSection"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {isModal && (
//         <div
//         className="modalBackdrop">
//           <form  className={`formSubmit ${isClosing ? "closing" : ""}`}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <h1>Don't Miss Out</h1>
//             <p>Sign up now to receive updates on all things NOMAD.</p>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
//                   message: "Please enter a valid email address",
//                 },
//               })}
//               placeholder="Email *"
//             />
//             {errors.email && (
//               <p style={{ color: "red" }}>{errors.email.message}</p>
//             )}
//             <button type="submit">SUBMIT</button>
//             <IoIosCloseCircleOutline
//               className="closeIcon"
//               onClick={handleCloseModal}
//             />
//           </form>
//         </div>
//       )}
//       <div className="blockWith-img">
//         <img src={blockImg2} alt="bear" />
//       </div>
//       <div className="blockWith-p">
//         {data.map((category) =>
//           category.items.map((item) => (
//             <div key={item.id}>
//               <h1>{t(`${id}.name`,{ns:"items"})}</h1>
//               <p>{item.description}</p>
//               <div className="locationDiv">
//                 <HoursWork
//                   hours={item.workDay}
//                   time={item.workDayTime}
//                   happyHour={item.happyHourDay}
//                   happyHourTime={item.happyHourTime}
//                 />
//                 <div className="lock">
//                   <Location
//                     address={"Enter on ground level of Hotel 1000"}
//                     googleMapsLink={
//                       "https://www.google.com/maps/search/?api=1&query=308+N+Randolph+Street,+Champaign,+ILL+61820"
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           ))
//         )}

//       </div>

//     </motion.div>
//   );
// }

// export default MainContent;
