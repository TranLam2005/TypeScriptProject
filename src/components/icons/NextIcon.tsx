import React from "react"
function NextIcon({width = 30, heigth = 30, fill = '#fff', className}: {width?: number, heigth?: number, fill?: string, className?: string}): React.ReactNode {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={heigth} viewBox="0 0 20 20"><rect x="0" y="0" width="10" height="10" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" x="0" y="0" width="20" height="20"><path fill={fill} d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/></svg></svg>
    )
}
export default NextIcon