import type React from "react";
import { GroupMenu } from "./HeaderMenu";
import { mockMenuList1, mockMenuList2, mockMenuList3 } from "../../../menu/states/mock";
import Logo from "../../../../components/icons/Logo";
import { Input } from "../../../../components/ui/input";
import CartIcon from "../../../../components/icons/cart";
import { Button } from "../../../../components/ui/button";
import SearchIcon from "../../../../components/icons/Search";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../../../components/ui/tooltip";
import { NotificationTooltip, ComponentCart } from "./component/Tooltip";
import { fakeDataCart } from "./states/mock";

export const Header: React.FC = () => {
    return (
        <header className="w-full h-[120px] flex items-center justify-center px-6 py-2 border-b bg-[linear-gradient(-180deg,#f53d2d,#f63)]">
            <div className="flex h-full items-center justify-between flex-col lg:w-[1280px]">
                
                <div className="flex items-center w-full justify-between gap-10">
                    <GroupMenu menuList={mockMenuList1}/>
                    <GroupMenu menuList={mockMenuList2}/>
                </div>
                <div className="flex items-center justify-between w-full flex-1">
                    <div className="flex-1">
                        <Logo />
                    </div>
                    <div className="flex-3 flex-col items-center ">
                        <div className="flex items-center">
                            <Input className="bg-white h-[50px]" placeholder="Nhập sản phẩm bạn muốn tìm"/>
                            <Button className="bg-[#fb5533] hover:bg-[#fb6445] cursor-pointer !px-[35px]  !rounded-sm w-[50px] h-[40px] relative right-[80px]"><SearchIcon /></Button>
                        </div>
                        <GroupMenu className="relative top-2" menuList={mockMenuList3}/>
                    </div>
                    <div className="flex-1 flex items-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="relative left-[80px] cursor-pointer"><CartIcon /></div>
                            </TooltipTrigger>
                            <TooltipContent side='bottom' className="bg-white smooth-tooltip" sideOffset={5}>
                                <NotificationTooltip title="Sản Phẩm Mới Thêm" Component={ComponentCart} data={fakeDataCart}/>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </header>
    )
}