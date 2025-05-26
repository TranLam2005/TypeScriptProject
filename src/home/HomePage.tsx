import React from "react";
import HomeCarousel from "./component/Carousel";
import VoucherIcon from "../components/icons/VoucherIcon";
import DollarIcon from "../components/icons/DollarIcon";
import ChoiceIcon from "../components/icons/ChoiceIcon";
import StyleShopeeIcon from "../components/icons/StyleShopee";
import MallIcon from "../components/icons/MallIcon";
import GiftIcon from "../components/icons/GiftIcon";
function HomePage() {
    return ( 
        <div className="w-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5 lg:w-[1280px]">
                <div className="flex items-center justify-between w-full gap-2">
                    <HomeCarousel className="flex-3"/>
                    <div className="flex flex-col flex-1 items-center justify-center gap-2">
                        <img className="object-cover h-[115px] w-full" src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-con-ca-cuc-dep.jpg"/>
                        <img className="object-cover h-[115px] w-full" src="https://taoanhdep.com/wp-content/uploads/2022/10/Butterfly-x-Allain.jpeg"/>
                    </div>
                </div>
                <div className="flex items-start justify-around w-full">
                    <div className="flex flex-col items-center justify-center">
                        <VoucherIcon />
                        <p className="text-[15px]">Mã giảm giá</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <DollarIcon />
                        <p className="text-center text-[15px]">Khách hàng <br></br> thân thiết</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <ChoiceIcon />
                        <p className="text-center text-[15px]">Hàng chọn <br></br> giá hời</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <StyleShopeeIcon />
                        <p className="text-center text-[15px]">Shopee Style <br></br> voucher 30%</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <MallIcon />
                        <p className="text-[15px]">Shopee</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <GiftIcon />
                        <p className="text-center text-[15px]">Săn ngay <br></br> 100.000 xu</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomePage;