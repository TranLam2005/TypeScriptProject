import React from "react";

function CartIcon({width = 35, height = 35, className}: {width?: number, height?: number, className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 512 496"><rect x="0" y="0" width="512" height="496" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 496" fill="#fff" x="0" y="0" width="512" height="496"><path fill="#fff" d="M448 69H137l-3-12q-5-23-22.5-37.5T70 5H21q-9 0-15 6T0 27q0 9 6 15t15 6h49q19 0 22 17l49 256q6 21 23.5 34t38.5 13h202q10 0 16-6t6-15q0-22-22-22H203q-14 0-20-12l-2-9h214q20 0 36.5-12t22.5-31l58-123v-5q0-27-18.5-45.5T448 69zm-32 175v2q-3 15-21 15H173l-28-149h303q18 0 21 17zM256 432q0 18-12.5 30.5T213 475q-17 0-29.5-12.5T171 432t12.5-30.5T213 389q18 0 30.5 12.5T256 432zm171 0q0 18-12.5 30.5T384 475t-30.5-12.5T341 432t12.5-30.5T384 389t30.5 12.5T427 432z"/></svg></svg>
    )
}
export default CartIcon;