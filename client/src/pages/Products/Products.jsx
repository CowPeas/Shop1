import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from "../../hooks/useFetch";
import "./Products.scss";


const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(10);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };




  return (
    <div className='products'>
      <div className="left">
        <div className="filteritem">
          <h2>𝒫𝓇🍩𝒹𝓊𝒸𝓉 𝒞𝒶𝓉𝑒𝑔🌞𝓇𝓎</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
          </div>

          <div className="InputItem">
            
           
          </div>

        <div className="filteritem">
          <h2>𝐹𝒾𝓁𝓉𝑒𝓇 𝐵𝓎 𝒫𝓇𝒾𝒸𝑒 </h2>
          <div className="InputItem">
            <span>0</span>
            <input 
              type="range" 
              min={0} 
              max={1000} 
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
            <span>1000</span>

          </div>
        </div>
        <div className="filteritem">
          <h2>𝒮🍔𝓇𝓉 𝐵𝓎</h2>
          <div className="InputItem">
          <input
            type="radio" 
            id="asc" 
            value="asc" 
            name="price" 
            onChange={(e) => setSort("asc")} 
           />

            <label htmlFor="asc" > 𝒫𝓇𝒾𝒸𝑒 (𝓁🐰𝓌𝑒𝓈𝓉 𝒻𝒾𝓇𝓈𝓉)</label>
          </div>
          <div className="InputItem">
            <input
              type="radio" 
              id="desc" 
              value="desc" 
              name="price"
              onChange={(e) => setSort("desc")} 
             />
            <label htmlFor="desc" > 𝒫𝓇𝒾𝒸𝑒 (𝐻𝒾𝑔𝒽𝑒𝓈𝓉 𝒻𝒾𝓇𝓈𝓉)</label>
          </div>

        </div>

      </div>
      <div className="right">
        <img 
          className='catImg'
          src="https://c.pxhere.com/photos/eb/50/delicious_korean_food_dinner_hot_spicy_chilli_curry-568149.jpg!d" 
          alt="" 
        />

        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
        
      </div>
    </div>
  );
};

export default Products;