import React from "react";
function SearchIcon({width = 300, height = 300}: {width?: number, height?: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 21"><rect x="0" y="0" width="21" height="21" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="#fff" x="0" y="0" width="21" height="21"><g fill="none" fillRule="evenodd" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8.5" r="5"/><path d="M17.571 17.5L12 12"/></g></svg></svg>
    )
}
export default SearchIcon;