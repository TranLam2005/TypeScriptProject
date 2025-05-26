import React from "react"
import ImageLoader from "../../../../../components/image/ImageLoader";
import { formatNumber } from "../../../../../helper/FormatNumber";
import { cn } from "clsx-tailwind-merge";

interface DownloadAppTooltipProps {
    srcAppStore: string;
    srcGooglePlay: string;
    srcAppGallery: string;
}

export const DownloadAppTooltip: React.FC<DownloadAppTooltipProps> = ({srcAppStore, srcGooglePlay, srcAppGallery}) => {
    return (
        <div className="flex flex-col gap-1 w-[150px] h-[160px] mb-[30px]">
            <ImageLoader className={'w-full flex-2'} src={'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/e82a7ab18aeae26e.png'}/>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 items-center flex-1">
                <ImageLoader className={''} src={srcAppStore}/>
                <ImageLoader src={srcGooglePlay}/>
                <ImageLoader src={srcAppGallery}/>
            </div>
        </div>
    )
}

export interface dataCart {
    src: string;
    title?: string;
    content: string;
    cost?: number;
}

export interface NotificationTooltipProps {
    title: string;
    Component: React.ComponentType<{ content: string; src: string, cost?: number }>;
    data: dataCart[];
}
export const ComponentNotification: React.FC<{ content: string; src: string }> = ({content, src}) => (
    <div className="w-[380px] cursor-pointer bg-[#fff2ee] hover:bg-white flex items-start gap-2">
        <img className="w-[40px] h-[40px] relative top-[8px]" src={'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/23/1084256/295497942_2922294937.jpg'}/>
        <div className="flex flex-col gap-2">
            <span className="text-start">
                {content}
            </span>
            <img className="w-[324px]" src={src}/>
        </div>
    </div>
)

export const ComponentCart: React.FC<{ content: string; src: string, cost?: number }> = ({content, src, cost}) => (
    <div className="flex items-center gap-2 w-full h-[60px] ml-10">
        <img className="w-[42px] h-[42px]" src={src}/>
        <div className="flex items-start justify-start flex-1 w-[328px] relative top-[5px] h-full ml-2 text-[15px]">
            <span className="truncate font-500 w-[220px]">{content}</span>
            <span className="text-[#ee4d2d] ml-[15px]">{cost ? formatNumber(cost) : ''}</span>
        </div>
    </div>
)

export const NotificationTooltip: React.FC<NotificationTooltipProps> = ({title, Component, data}) => {

    return (
        <div className="flex flex-col w-[400px] h-[500px] bg-white rounded-sm cursor-pointer">
            <div className="text-[18px] text-gray-400 text-start p-2">
                {title}
            </div>
            <div className={cn('flex-1 flex flex-col items-center h-[700px] overflow-hidden', Component === ComponentCart ? '' : '!bg-[#fff2ee]')}>
                {data.map((iten, index) => (
                    <Component key={index} content={iten.content} src={iten.src} cost={iten.cost}/>
                ))}
            </div>
        </div>
    )
}
