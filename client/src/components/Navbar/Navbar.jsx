import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";



const Navbar = () => {

  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

    return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                  <img src="/img/kym.png" alt="" />
                  <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>𝔎𝔖ℌ</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className='link' to= '/products/1'>𝚅𝚎𝚐𝚎𝚝𝚊𝚋𝚕𝚎𝚜</Link>
                    </div>
                <div className="item">
                    <Link className="link" to= '/products/2'>𝙵𝚛𝚞𝚒𝚝𝚜</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/3'>𝙲𝚎𝚛𝚎𝚊𝚕𝚜</Link>
                </div>
                <div className="item">
                    <Link className="link" to= '/products/4'>𝚂𝚙𝚒𝚌𝚎𝚜</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/5'>𝙹𝚞𝚒𝚌𝚎𝚜</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/6'>𝙸𝚌𝚎𝚌𝚛𝚎𝚊𝚖</Link>
                </div> 
            </div>
            <div className='center'>
                <Link className="link" to="/"><span>(っ◔◡◔)っ</span><h>𝑀𝒜𝒯𝒜𝒲𝐼𝒮</h></Link>
            </div>
            <div className='right'>
                
                <div className="item">
                    <div className="text">
                        <Link className="link" to="/">𝙃𝙤𝙢𝙚𝙥𝙖𝙜𝙚</Link>
                
                        <Link className="link" to="/">𝘼𝙗𝙤𝙪𝙩</Link>
                    
                    
                        <Link className="link" to="/">𝘾𝙤𝙣𝙩𝙖𝙘𝙩</Link>
                
                
                        <Link className="link"to="/">𝙎𝙩𝙤𝙧𝙚𝙨</Link>
                    </div>
                </div>
                <div className="icons">
                     <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                    </div>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <SearchIcon/>
                   
                </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  );
};

export default Navbar;