import React from 'react'
import "./Contact.scss"
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';




const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>(っ◔◡◔)っ 𝒢𝐸𝒯 𝐼𝒩 𝒯❀𝒰𝒞𝐻 𝒲𝐼𝒯𝐻 𝒰𝒮 🎉</span>
            <div className="mail">
                <input type="text" placeholder='🎅 𝐸𝓃𝓉𝑒𝓇 𝓎🌸𝓊𝓇 𝐸Ⓜ𝒶𝒾𝓁  🍔' />
                <button> 🍫 𝒥😍𝐼𝒩 𝒰𝒮 ☞🍮 </button>
            </div>
            <div className="icons">
            <TelegramIcon />
            <RedditIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            </div>
        </div>
    </div>
  );
};

export default Contact;