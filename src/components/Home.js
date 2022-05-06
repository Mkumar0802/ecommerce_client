import React from "react";
import Catagories from "./Categories ";
import Downbar from "./Downbar";
import Footer from "./Footer";

import Main from "./Main";
import Offers from "./Offer";
import Products from "./Products";

function Home(){

    return(
        <div >
            
            <Main/>
            <Downbar/>
            <Offers/>
            <Products/>
            <Footer/>
            

            
        </div>
    )
}

export default  Home;