import './Home.css';

import Product from "./Product";
import React from 'react'

function Home() {
    return (
        <div className="home">

         <div className="home_container">
            <img
        className="home_image"
        src="div_ ).jpg"
        alt=""
        /> 

            <div className="home_row">
             <Product
             id="897632"
             title="The lean startup by Eric Ries"
             price={34.98}
             image="download.png"
             rating={5}
             />
             <Product
             id="876524"
             title="The baking mixer for kitchen"
             price={126}
             image="shopping.webp"
             rating={3}
             />
            </div>

            <div className="home_row">
            <Product
            id="367782"
            title="Samsung ultra modern watch"
            price={199.99}
            image="download (1).jpg"
            rating={5}
            />
            <Product
            id="109874"
            title="Amazon eco computer speaker with Alexa"
            price={166.66}
            image="Amazon-Echo-dot-3-0-GRY-Computer-Speaker-491431034-i-1-1200Wx1200H.jpg"
            rating={4}
            />
            <Product
            id="456328"
            title="New Apple 10.2 ipad"
            price={200.03}
            image="refurb-ipad-pro-12-wifi-silver-2020_AV1.jpg"
            rating={5}/>
            </div>

            <div className="home_row">
            <Product
            id="789452"
            title="Sumsung Gaming Monitor"
            price={71.50}
            image="download.jpg"
            rating={5}
            />
            </div>

         </div>

        </div>
    )
}

export default Home
