import React from "react";

function DollarIcon({width = 40, height = 40}: {width?: number, height?: number}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32"><rect x="0" y="0" width="32" height="32" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="red" x="0" y="0" width="32" height="32"><path fill="red" d="M16 1.466C7.973 1.466 1.466 7.973 1.466 16c0 8.027 6.507 14.534 14.534 14.534c8.027 0 14.534-6.507 14.534-14.534c0-8.027-6.507-14.534-14.534-14.534zm1.255 22.414v2.047h-1.958v-2.024c-3.213-.44-4.62-3.08-4.62-3.08l2-1.673s1.277 2.223 3.587 2.223c1.276 0 2.244-.683 2.244-1.85c0-2.728-7.35-2.397-7.35-7.458c0-2.2 1.74-3.785 4.138-4.16V5.86h1.958v2.045c1.672.22 3.652 1.1 3.652 2.993v1.452H18.31v-.704c0-.726-.925-1.21-1.96-1.21c-1.32 0-2.287.66-2.287 1.584c0 2.794 7.35 2.112 7.35 7.415c0 2.18-1.628 4.07-4.158 4.445z"/></svg></svg>
    )
}
export default DollarIcon;