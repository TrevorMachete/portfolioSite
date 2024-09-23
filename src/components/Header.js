// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const discord = require('../assets/icons/discord.png');
const github = require('../assets/icons/github.png');
const linkedinColor = require('../assets/icons/linkedinColor.png');
const x = require('../assets/icons/x.png');

const Header = () => {

  return (
    <div className="header">
      <div className="socials">
        <Link to="https://github.com/TrevorMachete/"><img src={github} alt="01" /></Link>
        <Link to="https://discord.com/channels/@Trinity9300"><img src={discord} alt="02" /></Link>
        <Link to="https://www.linkedin.com/in/macs-machete-62636b127/"><img src={linkedinColor} alt="03" /></Link>
        <Link to="https://twitter.com/trevormachete"><img src={x} alt="04" /></Link>
      </div>
      <div className="get-in-touch">
        <Link to="/contact-us"><p>Get in touch</p></Link>
      </div>
    </div>
  );
};

export default Header;

