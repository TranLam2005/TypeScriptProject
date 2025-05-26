import type { NotificationTooltipProps } from "../../layout/component/header/component/Tooltip";

export interface MenuData {
    id?: number;
    name: string;
    slug: string;
    iconRight?: string;
    iconLeft?: string;
    tooltip?: string;
    props?: NotificationTooltipProps | Record<string, string>;
    children: MenuData[];
}

export interface MenuState {
    menuList: MenuData[];
    loaded: boolean;
}