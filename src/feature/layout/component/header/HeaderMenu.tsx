import React from 'react';
import type { MenuData } from "../../../menu/states/types";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "clsx-tailwind-merge";
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../components/ui/tooltip';
import { DownloadAppTooltip, NotificationTooltip } from './component/Tooltip';
import { FacebookIcon } from '../../../../components/icons/Facebook';
import { BellIcon, HelpIcon, LanguageIcon } from '../../../../components/icons/listIcons';
interface SingleMenuProps {
    menu: MenuData;
    active: boolean;
}
const IconComponents: Record<string, React.ElementType> = {
    Facebook: FacebookIcon,
    Bell: BellIcon,
    Help: HelpIcon,
    Language: LanguageIcon
}
const TooltipComponents: Record<string, React.ElementType> = {
    DownloadAppTooltip,
    NotificationTooltip
}

export const SingleMenu: React.FC<SingleMenuProps> = ({menu, active}) => {
    const navigate = useNavigate();

    if (!menu.children.length) {
        if (!menu.tooltip) {
            return (
                <div onClick={() => navigate(menu.slug)} className={cn("inline-flex gap-1 text-[13px] items-center border-b-2 cursor-pointer !text-white !hover:text-[hsla(0,0%,100%,.7)]",
                    active
                    ? " font-semibold"
                    : "border-transparent text-accent-foreground "
                )}>
                    <span className="">
                        {menu.iconLeft && IconComponents[menu.iconLeft] && React.createElement(IconComponents[menu.iconLeft])}
                    </span>
                    {menu.name}
                    <span >
                        {menu.iconRight && IconComponents[menu.iconRight] && React.createElement(IconComponents[menu.iconRight])}
                    </span>
                </div>
            )
        }
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <div onClick={() => navigate(menu.slug)} className={cn("inline-flex gap-1 text-[13px] items-center border-b-2 cursor-pointer !text-white !hover:text-[hsla(0,0%,100%,.7)]",
                        active
                        ? " font-semibold"
                        : "border-transparent text-accent-foreground"
                    )}>
                        <span>
                            {menu.iconLeft && IconComponents[menu.iconLeft] && React.createElement(IconComponents[menu.iconLeft])}
                        </span>
                        {menu.name}
                        <span >
                            {menu.iconRight && IconComponents[menu.iconRight] && React.createElement(IconComponents[menu.iconRight])}
                        </span>
                    </div>
                </TooltipTrigger>
                <TooltipContent className="p-2 bg-white smooth-tooltip" side='bottom' sideOffset={5}>
                    {
                        menu.tooltip && TooltipComponents[menu.tooltip] && 
                        React.createElement(TooltipComponents[menu.tooltip], menu.props)
                    }
                </TooltipContent>
            </Tooltip>
        )
    }
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div
                    className={cn("inline-flex gap-1 items-center border-b-2 cursor-pointer text-[13px] !text-white !hover:text-[hsla(0,0%,100%,.7)]",
                        active
                        ? "font-semibold"
                        : "border-transparent text-accent-foreground"
                    )}>
                    <span>
                        {menu.iconLeft && IconComponents[menu.iconLeft] && React.createElement(IconComponents[menu.iconLeft])}
                    </span>
                    {menu.name}
                    <span >
                        {menu.iconRight && IconComponents[menu.iconRight] && React.createElement(IconComponents[menu.iconRight])}
                    </span>
                </div>
            </TooltipTrigger>
            <TooltipContent className='p-2 bg-white flex flex-col gap-1 transition-all duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=open]:scale-100 will-change-[opacity,transform]' side='bottom' sideOffset={5}>
                {
                    menu.children.map((item, index) => (
                        <span key={index} className="!text-black cursor-pointer p-1 font-semibold 2xl:text-xl lg:text-sm " onClick={() => navigate(`${menu.slug}${item.slug}`)}>
                            {item.name}
                        </span>
                    ))
                }
            </TooltipContent>
        </Tooltip>
    )
}

interface GroupMenuProps {
    menuList: MenuData[];
    className?: string;
}
export const GroupMenu: React.FC<GroupMenuProps> = ({menuList, className}) => {
    const location = useLocation();

    const isActive = (menu: MenuData): boolean => {
        const currentPath = location.pathname;

        if(menu.slug === "/") {
            return currentPath === "/";
        }

        const menuPath = menu.slug;

        if(menuPath === currentPath || currentPath.startsWith(menuPath + "/")) {
            return true;
        }
        return false;
    }
    return (
        <nav className={cn('flex items-center gap-3', className)}>
            {menuList.map((menu) => (
                <SingleMenu key={menu.id} menu={menu} active={isActive(menu)} />
            ))}
        </nav>
    )
}