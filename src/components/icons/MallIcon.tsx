import React from "react";

function MallIcon({width = 40, height = 40}: {width?: number, height?: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" x="0" y="0" width="24" height="24"><path fill="red" d="M5.615 21q-.69 0-1.152-.462Q4 20.075 4 19.385V8.615q0-.69.463-1.152Q4.925 7 5.615 7H8q0-1.671 1.164-2.836T12 3q1.671 0 2.836 1.164T16 7h2.385q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H5.615ZM12 13q1.671 0 2.836-1.164T16 9h-1q0 1.25-.875 2.125T12 12q-1.25 0-2.125-.875T9 9H8q0 1.671 1.164 2.836T12 13ZM9 7h6q0-1.25-.875-2.125T12 4q-1.25 0-2.125.875T9 7Z"/></svg></svg>
    )
}
export default MallIcon;