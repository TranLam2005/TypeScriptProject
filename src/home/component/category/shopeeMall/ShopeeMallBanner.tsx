import React from "react";
import CarouselShopeeMall from "./component/Carousel";
import { Link } from "react-router-dom";

function ShopeeMallBanner() {
    return ( 
        <div className="flex items-center justify-center border-t border-gray-200">
            <Link className="flex-1" to={'#'}>
                <img className="" src="https://cf.shopee.vn/file/vn-11134258-7ra0g-m7uqe24brygj5f"/>
            </Link>
            <CarouselShopeeMall className="flex-2"/>
        </div>
     );
}

export default ShopeeMallBanner;