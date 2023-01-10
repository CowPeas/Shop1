import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://c.pxhere.com/photos/5c/a5/ice_soft_ice_cream_waffle_ice_cream_cream_bag_ice_cream_dessert_schokoeis_cream-642701.jpg!d"  alt="" />
                <button>
                    <Link className='link' to="/products/1">🍎 ⋆ 🍭  🎀  𝒮𝓊𝓃𝒹𝒶𝓎 𝒮𝒶𝓁𝑒  🎀  🍭 ⋆ 🍎</Link>
                </button>
            </div>
            <div className="row">
                <img src= "https://c.pxhere.com/photos/50/41/avocados_fruit_food_ripe_fresh_agriculture_healthy_raw-1058734.jpg!d" alt="" />
                <button>
                    <Link className='link' to="/products/1">✳  🎀  𝒱𝑒𝑔𝑔𝒾𝑒𝓈  🎀  ✳</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src= "https://c.pxhere.com/images/64/29/3f796043d958fc7b6bb3d39414c2-1457327.jpg!d"  alt="" />
                <button>
                    <Link className='link' to="/products/1">🐁 ⋆ 🐑  🎀  𝐹𝓇𝓊𝒾𝓉𝓈  🎀  🐑 ⋆ 🐁</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src= "https://c.pxhere.com/images/15/b9/514a0c862be62466c4e070480ed1-1657784.jpg!d"  alt="" />
                            <button>
                                <Link className='link' to="/products/1">🐤𝘊𝘦𝘳𝘦𝘢𝘭𝘴🐤</Link>
                            </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src= "https://c.pxhere.com/photos/87/08/frog_cooking_spices_preparation_eat_cook_ingredient_kitchen-1035354.jpg!d"  alt="" />
                            <button>
                                <Link className='link' to="/products/1">🐉 𝚂𝚙𝚒𝚌𝚎𝚜 🎄</Link>
                            </button>
                    </div>
                </div>
            </div>
            
            <div className="row">
                    <img src= "https://c.pxhere.com/photos/ce/d5/berries_beverage_cocktail_colour_drink_energy_food_fresh-1360775.jpg!d"  alt="" />
                            <button>
                                <Link className='link' to="/products/1">🐝 𝙹𝚞𝚒𝚌𝚎𝚜 💗💞</Link>
                            </button>
                    
            </div>
        </div>

    </div>
  );
};

export default Categories;