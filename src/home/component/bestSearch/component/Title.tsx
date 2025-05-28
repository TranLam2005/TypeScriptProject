import React from "react";
import { Button } from "../../../../components/ui/button";
import NextIcon from "../../../../components/icons/NextIcon";

function Title() {
    return ( 
        <div className="flex items-center justify-between w-full px-[10px]">
            <div className="text-[#ee4d2d] text-[20px] font-[450]">
                TÌM KIẾM HÀNG ĐẦU
            </div>
            <span className="flex cursor-pointer items-center gap-1 justify-center text-[16px] text-[#ee4d2d]">
                Xem tất cả
                <NextIcon heigth={12} width={12} className="relative top-[2px]" fill="#ee4d2d"/>
            </span>
        </div>
     );
}

export default Title;