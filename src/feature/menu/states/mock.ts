import { fakeDataCart } from "../../layout/component/header/states/mock";
import type { MenuData } from "./types";
import { ComponentNotification } from "../../layout/component/header/component/Tooltip";
export const mockMenuList1: MenuData[] = [
    {
        id: 1,
        name: "Kênh người bán",
        slug: "/kenh-nguoi-ban",
        children: []
    },
    {
        id: 2,
        name: "Tải ứng dụng",
        slug: "/tai-ung-dung",
        tooltip: "DownloadAppTooltip",
        props: {
            srcAppStore: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/135555214a82d8e1.png",
            srcGooglePlay: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1fddd5ee3e2ead84.png",
            srcAppGallery: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4abb5c0809818b22.png",
        },
        children: []
    },
    {
        id: 3,
        name: "Kết nối",
        slug: "/ket-noi",
        iconRight: "Facebook",
        children: []
    }
]

export const mockMenuList2: MenuData[] = [
    {
        id: 1,
        name: "Thông báo",
        slug: "/thong-bao",
        iconLeft: "Bell",
        tooltip: "NotificationTooltip",
        props: {
            title: "Thông báo vừa mới nhận",
            Component: ComponentNotification,
            data: fakeDataCart

        },
        children: []
    },
    {
        id: 2,
        name: "Hỗ trợ",
        slug: "/ho-tro",
        iconLeft: "Help",
        children: []
    },
    {
        id: 3,
        name: "Tiếng việt",
        slug: "/tieng-viet",
        iconLeft: "Language",
        children: [
            {
                name: "Tiếng Việt",
                slug: "/tieng-viet",
                children: []
            },
            {
                name: "Tiếng Anh",
                slug: "/tieng-anh",
                children: []
            }
        ]
    },
]

export const mockMenuList3: MenuData[] = [
    {
        id: 1,
        name: "Bộ mở ốc vít",
        slug: '/bo-mo-oc-vit',
        children: []
    },
    {
        id: 2,
        name: "Loa bluetooth",
        slug: '/loa-bluetooth',
        children: []
    },
    {
        id: 3,
        name: "Combo sửa xe máy",
        slug: '/combo-sua-xe-may',
        children: []
    },
    {
        id: 4,
        name: "Bộ báo hồng",
        slug: '/bo-bao-hong',
        children: []
    },
    {
        id: 5,
        name: "Iphone 14 Pro Max giá rẻ 1k",
        slug: '/bo-bao-hong',
        children: []
    }
]