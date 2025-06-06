import React from "react";

export function FacebookIcon ({width = 20, height = 20}: {width: number, height: number}): React.ReactElement {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25"><rect x="0" y="0" width="24" height="25" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="#fff" x="0" y="0" width="24" height="25"><path fill="#fff" d="M12 2.54c5.523 0 10 4.476 10 10c0 4.99-3.657 9.127-8.437 9.878V15.43h2.33l.443-2.89l-2.773-.001v-1.922c.015-.774.411-1.515 1.63-1.515h1.26V6.64s-1.144-.196-2.238-.196c-2.249 0-3.73 1.342-3.776 3.774l-.002.117v2.203H7.899v2.89h2.54v6.988C5.657 21.667 2 17.53 2 12.54c0-5.523 4.477-10 10-10"/></svg></svg>
    )
}
