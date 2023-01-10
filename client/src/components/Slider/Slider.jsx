import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


const Slider = () => {



const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://c.pxhere.com/images/82/5c/61770963e975d37b82bc4694d977-1459609.jpg!d" ,
        "https://c.pxhere.com/photos/89/ce/fruit_juices_honey_bottles-900913.jpg!d",
        "https://c.pxhere.com/photos/97/69/buffet_indian_food_spices_lunch_restaurant_cuisine_dinner-977502.jpg!d",
        "https://c.pxhere.com/photos/2f/dc/salad_strawberries_asparagus_cress_tomatoes_cherry_tomatoes_sango_radish_cress_spring-1382039.jpg!d",
        "https://c.pxhere.com/photos/4f/20/retail_grocery_supermarket_store_food_shopping_market_shop-613228.jpg!d",
        
    ];



const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
}
const nextSlide = () =>{
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
}

  return (
    <div className="slider">
        <div className="container" style = {{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
        </div>
        <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
        </div>
    </div>
  );
};

export default Slider;