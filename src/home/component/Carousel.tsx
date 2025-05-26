import React from "react";
import { Carousel , CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import NextIcon from "../../components/icons/NextIcon";
import PreIcon from "../../components/icons/PreIcon";
import { cn } from "clsx-tailwind-merge";

function HomeCarousel({className}: {className?: string}): React.ReactNode {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    return (
        <Carousel className={cn('h-[235px] w-full relative group', className)}
            plugins={[plugin.current]}
        >
                <CarouselContent>
                    <CarouselItem>
                        <img className="w-full h-[235px] object-cover" src="https://daihocdaivietsaigon.edu.vn/wp-content/uploads/2023/02/1676242016_111-Hinh-Anh-Avatar-Nu-Dep-Phong-Cach-CHILL-HET.jpg"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="w-full h-[235px] object-cover" src="https://tse3.mm.bing.net/th?id=OIP.EfzCAxXDMLM2NqJ9N5juiAHaEK&pid=Api&P=0&h=180"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="w-full h-[235px] object-cover" src="https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!bw700"/>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className="opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed bg-zinc-500 hover:bg-zinc-600 flex items-center justify-center transition-all ease-out duration-400 absolute right-[5px]">
                    <NextIcon />
                </CarouselNext>
                <CarouselPrevious className="opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed bg-zinc-500 hover:bg-zinc-600 flex items-center justify-center transition-all ease-out duration-400 absolute left-0">
                    <PreIcon />
                </CarouselPrevious>
            </Carousel>
    )
}

export default HomeCarousel;