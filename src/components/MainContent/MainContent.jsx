import React, { useState } from "react";
import "./MainContantStyle.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import {motion} from 'framer-motion';

import Location from "./../Location/Location";
import HoursWork from "./../HoursWork/HoursWork";
import blockImg2 from "./../../assets/images/1.jpg";

function MainContent({ isModal, setIsModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Дані форми:", data);//Ці данні відправити на сервер
    setIsModal(false);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsModal(false);
    }, 500);
  };
  return (
    <motion.div className="mainSection"
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    >
      {isModal && (
        <div className="modalBackdrop">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`formSubmit ${isClosing ? "closing" : ""}`}
          >
            <h1>Don't Miss Out</h1>
            <p>Sign up now to receive updates on all things Rosebay.</p>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
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
        <h1>Unveiling Seattle’s Vibrant Spirit </h1>
        <p>
          We are Champaign’s premier restaurant and bar, where flavor,
          connection, and culture come together. Located in the heart of the
          city, NOMAD is more than a dining destination—it’s a hub for unique
          experiences and unforgettable moments. Savor our signature wings,
          gourmet burgers, and vibrant tacos, all crafted to perfection. From
          lively Latin nights to exclusive events, we create an atmosphere where
          everyone feels welcome, energized, and inspired. At NOMAD Lounge,
          elegance meets excellence, and every visit is a journey to something
          extraordinary. Join us to celebrate, connect, and experience the best
          Champaign has to offer.
        </p>
        <div className="locationDiv">
          <HoursWork
            hours={"Wednesday - Sunday"}
            happyHour={"Wednesday-Thursday, 4-6 pm"}
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
    </motion.div>
  );
}

export default MainContent;
