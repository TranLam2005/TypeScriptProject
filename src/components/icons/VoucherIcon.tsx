import React from "react";

function VoucherIcon({width = 40, height = 40}: {width?: number, height?: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" x="0" y="0" width="24" height="24"><path fill="none" stroke="yellow" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6H6c-.932 0-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083C3 7.602 3 8.068 3 9a3 3 0 1 1 0 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C4.602 18 5.068 18 6 18h8m0-12h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 7.602 21 8.068 21 9a3 3 0 1 0 0 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 18 18.932 18 18 18h-4m0-12v12"/></svg></svg>
    )
}
export default VoucherIcon;