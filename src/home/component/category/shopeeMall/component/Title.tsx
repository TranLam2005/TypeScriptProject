import React from "react";
import NextIcon from "../../../../../components/icons/NextIcon";

function TitleShopeeMall() {
    return ( 
        <div className="flex items-center w-full h-[60px] px-[15px]">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <a className="text-[#d0011b] text-[18px] font-[500]" href="#">SHOPEE MALL</a>
                    <div className="border-l border-[#d8d8d8] flex items-center ml-[10px] gap-3">
                        <span className="text-[#333] text-[17px] font-[400] flex items-center gap-2 ml-[10px]">
                            <img className="w-[17px] h-[17px]" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png"/>
                            Trả hàng miễn phí trong 15 ngày
                        </span>
                        <span className="text-[#333] text-[17px] font-[400] flex items-center gap-2">
                            <img className="w-[17px] h-[17px]" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png"/>
                            Hàng chính hãng 100%
                        </span>
                        <span className="text-[#333] text-[17px] font-[400] flex items-center gap-2">
                            <img className="w-[17px] h-[17px]" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png"/>
                            Miễn phí vẫn chuyển
                        </span>
                    </div>
                </div>
                <div>
                    <span className="flex items-center gap-2 text-[17px] text-[#d0011b]">
                        Xem tất cả
                        <div className="w-[18px] h-[18px] cursor-pointer rounded-full bg-[#d0011b] flex items-center justify-center">
                            <NextIcon width={13} heigth={13} fill="#fff"/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default TitleShopeeMall;