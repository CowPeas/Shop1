import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className ="footer">
      <div className="top">
        <div className="item">
          <h1>๐ฅ ๐๐ถ๐๐๐๐๐๐พ๐๐ ๐</h1>
          <span>Vegetables</span>
          <span>Fruits</span>
          <span>Cereals</span>
          <span>Spices</span>
          <span>Juices</span>
          <span>IceCream</span>
        </div>

        <div className="item">
          <h1>โคโค ๐ฟ๐พ๐๐๐  โฆโฆ</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Send-Money</span>
        </div>

        <div className="item">
          <h1>๐ญ ๐๐ท๐๐๐ ๐ญ</h1>
          <p1>Healthy Eating</p1>
        </div>

        <div className="item">
          


          <button>
            <Link className='link' onClick= {function myFunction() {
ย ย ย ย ย ย ย ย ย ย ย ย ย ย ย ย window.open("https://discord.com/users/806503002591723540");
ย ย ย ย ย ย ย ย ย ย ย ย }}alt="" >
            <h1> (ใฃโโกโ)ใฃ ๐ณ๐ด๐ป๐ธ๐๐ด๐๐โต</h1>
            </Link>
            
          </button>
          <span>For Deliveries call: +2547*****9</span>
          <span>Technical Inquiries call: +2547******2</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">๐๐๐ฏ๐๐ฒ๐ผ๐ฎ</span>
          <span className="Copyright">
          โธ ๐ฒ๐พ๐ฟ๐๐๐ธ๐ถ๐ท๐ 2023. ๐ฐ๐ป๐ป ๐๐ธ๐ถ๐ท๐๐ ๐๐ด๐๐ด๐๐๐ด๐ณ
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