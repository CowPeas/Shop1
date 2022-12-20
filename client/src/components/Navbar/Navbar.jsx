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
                    <Link className='link' to= '/products/1'>𝔙𝔢𝔤𝔢𝔱𝔞𝔟𝔩𝔢𝔰</Link>
                    </div>
                <div className="item">
                    <Link className="link" to= '/products/2'>𝔉𝔯𝔲𝔦𝔱𝔰</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/3'>ℭ𝔢𝔯𝔢𝔞𝔩𝔰</Link>
                </div>
                <div className="item">
                    <Link className="link" to= '/products/4'>𝔖𝔭𝔦𝔠𝔢𝔰</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/5'>𝔍𝔲𝔦𝔠𝔢𝔰</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/6'>ℑ𝔠𝔢ℭ𝔯𝔢𝔞𝔪</Link>
                </div> 
            </div>
            <div className='center'>
                <Link className="link" to="/"><span>(っ◔◡◔)っ</span><h>𝑀𝒜𝒯𝒜𝒲𝐼𝒮</h></Link>
            </div>
            <div className='right'>
                
                <div className="item">
                    <div className="text">
                        <Link className="link" to="/">𝕳𝖔𝖒𝖊𝖕𝖆𝖌𝖊</Link>
                
                        <Link className="link" to="/">𝕬𝖇𝖔𝖚𝖙</Link>
                    
                    
                        <Link className="link" to="/">𝕮𝖔𝖓𝖙𝖆𝖈𝖙</Link>
                
                
                        <Link className="link"to="/">𝕾𝖙𝖔𝖗𝖊𝖘</Link>
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