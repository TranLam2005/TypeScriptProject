import React from "react";

function ChoiceIcon({width = 40, height = 40}: {width?: number, height?: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" x="0" y="0" width="24" height="24"><path fill="red" d="m12 21l-3.375 1.125q-.175.05-.325.075t-.3.025q-.8 0-1.4-.563T6 20.225v-5.45L3.4 10.55q-.15-.25-.225-.513T3.1 9.5q0-.275.075-.537T3.4 8.45l3.4-5.5q.275-.45.725-.7T8.5 2h7q.525 0 .975.25t.725.7l3.4 5.5q.15.25.225.513t.075.537q0 .275-.075.538t-.225.512L18 14.775v5.45q0 .875-.6 1.438t-1.4.562q-.15 0-.3-.025t-.325-.075L12 21Zm-3.5-6h7l3.4-5.5L15.5 4h-7L5.1 9.5L8.5 15Zm2.45-4.25l3.525-3.55q.275-.3.688-.288t.712.288q.3.3.313.713t-.288.712l-4.25 4.25q-.3.3-.7.3t-.7-.3L8.125 10.75q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3l1.4 1.425Z"/></svg></svg>
    )
}

export default ChoiceIcon;