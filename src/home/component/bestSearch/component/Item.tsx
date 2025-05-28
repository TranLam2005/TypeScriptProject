import React from "react";
import topImage from './top.png'
import { cn } from "clsx-tailwind-merge";

function Item({src, nameProduct, className}: {src?: string, nameProduct?: string, className?: string}) {
    return ( 
        <div className={cn("flex bg-white flex-col w-[180px] justify-between h-[250px]", className)}>
            <div className="flex-1 w-full flex-col relative">
                <img className="absolute w-[32px] h-[40px]" src={topImage}/>
                <img className="!w-full h-[150px] object-cover" src={src}/>
                <div className="w-full bottom-0 h-[25px] bg-[rgba(0,0,0,.26)] flex items-center justify-center text-white absolute">
                    Bán 1k+/tháng
                </div>
            </div>
            <div className="flex-1 text-[#555] font-[450] text-[20px] flex items-center justify-center">
                {nameProduct}
            </div>
        </div>
     );
}

export default Item;