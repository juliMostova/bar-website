import React from "react";
import "./ContactUsStyle.css";
import { motion } from "framer-motion";
import reservPhoto from "./../../../assets/images/reservation.jpg";

function ContactUs() {
  return (
    <motion.div className="about-container"
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    >
      <h1 className="main-title">RESERVATIONS</h1>
      <div className="reserv-info">
        <div className="text-block">
          <h2>Reservations Required for large parties</h2>
          <span><i>*if your party is 8 people or more, please call us</i></span>
          <div className="tel">(217) 800-1094</div>
          <p>
            <i>
            For semi-private and full buyouts, please visit our Private Events
            page for more information.
            </i>
          </p>
        </div>
        <div className="image-block">
          <img src={reservPhoto} alt="reserv" />
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
