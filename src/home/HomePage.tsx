import React from "react";
import Banner from "./component/Banner";
import WrapperCategory from "./component/category/wrapper/Wrapper";
import CarouselCategoty from "./component/category/carouselCategory/CarouselCategory";
import TitleCarouselCategory from "./component/category/carouselCategory/component/Title";
import TitleShopeeMall from "./component/category/shopeeMall/component/Title";
import ShopeeMallBanner from "./component/category/shopeeMall/ShopeeMallBanner";
import CarouselBestSearch from "./component/bestSearch/component/Carousel";
import Title from "./component/bestSearch/component/Title";
function HomePage() {
    return ( 
        <main className="w-full flex flex-col items-center justify-center gap-5">
            <Banner />
            <div className="w-[1280px] flex flex-col items-center justify-center gap-5">
                <WrapperCategory Component={CarouselCategoty} Title={TitleCarouselCategory}/>
                <WrapperCategory Component={ShopeeMallBanner} Title={TitleShopeeMall}/>
                <WrapperCategory Title={Title} Component={CarouselBestSearch} />
            </div>
        </main>
     );
}
export default HomePage;