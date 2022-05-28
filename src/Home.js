import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/I/71VcTGuZAnL._SX3000_.jpg" alt="" />
            <div className="home__row">
                <Product id="12321341" title='The lean startup' price={4.99} image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
                <Product id="12331112" title="Usha Trienergy Plus 800 Watt Mixer Grinder with Copper Motor, Square Shaped Quadri Flow Blender Jar and, 6 Fin Whirlwind Food Grade Blade, 4 Jars (Magenta)" price={29.99} image="https://m.media-amazon.com/images/I/61RHKD6n89L._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
            </div>
            <div className="home__row">
                <Product id="71728198" title='Skytech Archangel Gaming PC Desktop – Intel Core i5 12400F 2.5 GHz, RTX 3060, 1TB NVME SSD, 16G DDR4 3200, 600W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit' price={1349} image="https://m.media-amazon.com/images/I/818vY0K7DAL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
                <Product id="78478203" title="SheIn Women's Floral Print Button Front Ruffle Hem High Waist A Line Midi Skirts" price={27} image="https://m.media-amazon.com/images/I/71wLbv0zdmL._AC_UL480_FMwebp_QL65_.jpg" rating={4}/>
                <Product id="84730284" title="Blink Mini – Compact indoor plug-in smart security camera, 1080p HD video, night vision, motion detection, two-way audio, easy set up, Works with Alexa – 1 camera (White)" price={486} image="https://m.media-amazon.com/images/I/31k4JysPQ5L._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
            </div>            
            <div className="home__row">
                
                <Product id="93824792" title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, Black" price={399} image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
            </div>            

        </div>
    </div>
  )
}

export default Home


// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_pv_en-GB._CB428684220_.jpg