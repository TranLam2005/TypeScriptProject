import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import Item from "./component/item";
import NextIcon from "../../../../components/icons/NextIcon";
import PreIcon from "../../../../components/icons/PreIcon";
import { mockItems } from "./states/mocks";
import { cn } from "clsx-tailwind-merge";

function CarouselCategoty({className}: {className?: string}): React.ReactElement {
    return ( 
        <Carousel
            opts={{
            align: "start",
        }}
        className={cn("w-full !h-full group bg-white", className)}
        >
            <CarouselContent className="relative left-[5px] !h-full">
                {mockItems.map((item, index) => (
                    <CarouselItem key={index} className={cn("basis-1/10 !h-full p-0 [&_.grid>*:last-child]:border-b-0")}>
                        <div className="grid grid-rows-2 h-full">
                            <Item src={item[0].src} title={item[0].title}/>
                            <Item src={item[1].src} title={item[1].title}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 !w-[30px] !h-[30px] cursor-pointer group-hover:scale-[1.3] transform transition-all ease-out duration-200 disabled:opacity-0">
                <NextIcon fill="#000"/>
            </CarouselNext>
            <CarouselPrevious className="absolute !w-[30px] !h-[30px] left-0 cursor-pointer group-hover:scale-[1.3] transform transition-all ease-out duration-200 disabled:opacity-0">
                <PreIcon fill="#000"/>
            </CarouselPrevious>
        </Carousel>
     );
}

export default CarouselCategoty;