import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../../../../../components/ui/carousel";
import Item from "./Item";
import { fakeDataShopeeMall } from "../states/mocks";
import NextIcon from "../../../../../components/icons/NextIcon";
import PreIcon from "../../../../../components/icons/PreIcon";
import { cn } from "clsx-tailwind-merge";


function CarouselShopeeMall({className}: {className?: string}): React.ReactElement {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [current, setCurrent] = useState(0);
    const customTranslateDistance = 50; 
      const handleSlideChange = useCallback(() => {
        if (!api) return;
            
        const selectedIndex = api.selectedScrollSnap();
        console.log(`Selected index: ${selectedIndex}`);
        setCurrent(selectedIndex);
        
        const container = api.containerNode();
        const customTranslate = -(selectedIndex * customTranslateDistance);
        
        if (container) {
            container.style.transform = `translateX(${customTranslate}%)`;
            
            console.log(`Sliding to index: ${selectedIndex}, translate: ${customTranslate}%`);
        }
    }, [api, customTranslateDistance]);

    useEffect(() => {
        if (!api) return;

        // Set initial state
        setCurrent(api.selectedScrollSnap());
        
        // Listen for slide changes
        api.on('select', handleSlideChange);
        
        return () => {
            api.off('select', handleSlideChange);
        };
    }, [api, handleSlideChange]);
    return (        
        <Carousel 
            setApi={setApi}
            opts={{
                align: "start",
                loop: false,
                skipSnaps: false,
            }}
            className={cn("group", className)}
        >
            <CarouselContent>
                {fakeDataShopeeMall.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/4 !p-0">
                        <div className="flex flex-col items-center justify-center">
                            <Item src={item[0].src}/>
                            <Item src={item[1].src}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="absolute flex items-center justify-center right-0 !w-[25px] !h-[25px] cursor-pointer group-hover:scale-[1.5] transform transition-all ease-out duration-200 disabled:opacity-0">
                <NextIcon fill="#000" width={10} heigth={10}/>
            </CarouselNext>
            <CarouselPrevious className="absolute flex items-center justify-center !w-[25px] !h-[25px] left-0 cursor-pointer group-hover:scale-[1.5] transform transition-all ease-out duration-200 disabled:opacity-0">
                <PreIcon fill="#000" width={10} heigth={10}/>
            </CarouselPrevious>
        </Carousel>
     );
}

export default CarouselShopeeMall;
