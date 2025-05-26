import React from "react"
function PreIcon({width = 30, heigth = 30}: {width?: number, heigth?: number}): React.ReactNode {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={heigth} viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="20" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" x="0" y="0" width="20" height="20"><path fill="#fff" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg></svg>
    )
}
export default PreIcon