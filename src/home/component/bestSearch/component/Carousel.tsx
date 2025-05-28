import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import { mockBestSearchItems } from "../states/mocks";
import Item from "./Item";
import NextIcon from "../../../../components/icons/NextIcon";
import PreIcon from "../../../../components/icons/PreIcon";

function CarouselBestSearch() {

    return ( 
        <Carousel className="group border-t border-gray-200">
            <CarouselContent>
                {mockBestSearchItems.map((item, index) => (
                    <CarouselItem className="basis-full" key={index}>
                        <div className="grid grid-cols-6 place-items-center mt-[10px]">
                            {
                                item.map((subItem, subIndex) => (
                                    <Item className="justify-items-center items-center" key={subIndex} src={subItem.src} nameProduct={subItem.nameProduct}/>
                                ))
                            }
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 !w-[30px] !h-[30px] cursor-pointer group-hover:scale-[1.5] transform transition-all ease-out duration-200 disabled:opacity-0">
                <NextIcon width={20} heigth={20} fill="#000"/>
            </CarouselNext>
            <CarouselPrevious className="absolute !w-[30px] !h-[30px] left-0 cursor-pointer group-hover:scale-[1.5] transform transition-all ease-out duration-200 disabled:opacity-0">
                <PreIcon width={20} heigth={20} fill="#000"/>
            </CarouselPrevious>
        </Carousel>
     );
}

export default CarouselBestSearch;