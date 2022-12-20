import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";


const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );

  return (
    <div className='featuredProducts'>

        <div className="top">
            <h1>{type}🍧products </h1>
            <p> (っ◔◡◔)っ 🕊  🎀 𝔑𝔶𝔞𝔫𝔶𝔞 𝔫𝔦: 3 = 20, 1 = 5, 3 = 25, 1 =10
                (っ◔◡◔)っ 🕊  🎀 𝔎𝔦𝔱𝔲𝔫𝔤𝔲𝔲 𝔫𝔦: 3 = 10, 1 = 5, 3 = 20, 1 =10.
             </p>
            
        </div>
        <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    </div>
  );
};

export default FeaturedProducts;