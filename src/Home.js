import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/I/71VcTGuZAnL._SX3000_.jpg" alt="" />
            <div className="home__row">
                <Product/>
                {/* <Product/> */}
            </div>
            <div className="home__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>            
            <div className="home__row">
                {/* Product */}
            </div>            

        </div>
    </div>
  )
}

export default Home


// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_pv_en-GB._CB428684220_.jpg