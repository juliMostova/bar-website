import React from 'react';
import './FooterStyle.css';
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-content'>
      <a 
        href="https://www.instagram.com/nomad_lounge_champaign/?igsh=MXR1NzZ1czZxZDlkYQ%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <LuInstagram style={{paddingRight:'10px',margin:'0px' ,fontSize: "20px",width:'21px',height:'21px',objectFit:'cover', color: "#FFFFFF" }} />
      </a>

      <a 
        href="https://www.instagram.com/thedancingnomads?igsh=bnhuenZzNTdmbG50" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <LuInstagram style={{ fontSize: "20px",width:'21px',height:'21px',objectFit:'cover', color: "#FFFFFF" }} />
      </a>
      <p>NOMAD &copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
