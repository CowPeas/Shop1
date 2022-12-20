import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className ="footer">
      <div className="top">
        <div className="item">
          <h1>🔥 𝒞𝒶𝓉𝑒𝑔💞𝓇𝒾𝑒𝓈 👑</h1>
          <span>Vegetables</span>
          <span>Fruits</span>
          <span>Cereals</span>
          <span>Spices</span>
          <span>Juices</span>
          <span>IceCream</span>
        </div>

        <div className="item">
          <h1>↤↤ 𝐿𝒾𝓃𝓀𝓈  ↦↦</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Send-Money</span>
        </div>

        <div className="item">
          <h1>🍭 𝒜𝒷🎅𝓊𝓉 🍭</h1>
          <p1>Healthy Eating</p1>
        </div>

        <div className="item">
          


          <button>
            <Link className='link' onClick= {function myFunction() {
                window.open("https://discord.com/users/806503002591723540");
            }}alt="" >
            <h1> (っ◔◡◔)っ 🅳🅴🅻🅸🆅🅴🆁🆈⛵</h1>
            </Link>
            
          </button>
          <span>For Deliveries call: +2547*****9</span>
          <span>Technical Inquiries call: +2547******2</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">𝑀𝒜𝒯𝒜𝒲𝐼𝒮</span>
          <span className="Copyright">
          Ⓒ 🅲🅾🅿🆈🆁🅸🅶🅷🆃 2023. 🅰🅻🅻 🆁🅸🅶🅷🆃🆂 🆁🅴🆂🅴🆁🆅🅴🅳
            </span>
        </div>
        <div className="right">
          <img src="/img/vis.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;