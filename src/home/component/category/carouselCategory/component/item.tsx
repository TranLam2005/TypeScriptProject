import React from 'react';
import type { typeMockItem } from '../states/mocks';
function Item({src, title}: typeMockItem): React.ReactElement {
    return ( 
        <div className='w-full h-full bg-white hover:scale-[1.01] hover:shadow-md hover:shadow-zinc-500 border border-black cursor-pointer flex flex-col items-center justify-center gap-1'>
            <img className='w-full flex-1' src={src}/>
            <span className='flex-1'>{title}</span>
        </div>
     );
}

export default Item;