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
                    <span>ππβ</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className='link' to= '/products/1'>ππππππππππ</Link>
                    </div>
                <div className="item">
                    <Link className="link" to= '/products/2'>π΅πππππ</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/3'>π²ππππππ</Link>
                </div>
                <div className="item">
                    <Link className="link" to= '/products/4'>ππππππ</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/5'>πΉπππππ</Link>
                </div> 
                <div className="item">
                    <Link className="link" to= '/products/6'>πΈπππππππ</Link>
                </div> 
            </div>
            <div className='center'>
                <Link className="link" to="/"><span>(γ£ββ‘β)γ£</span><h>πππ―ππ²πΌπ?</h></Link>
            </div>
            <div className='right'>
                
                <div className="item">
                    <div className="text">
                        <Link className="link" to="/">ππ€π’ππ₯πππ</Link>
                
                        <Link className="link" to="/">πΌππ€πͺπ©</Link>
                    
                    
                        <Link className="link" to="/">πΎπ€π£π©πππ©</Link>
                
                
                        <Link className="link"to="/">ππ©π€π§ππ¨</Link>
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