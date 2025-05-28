import React from 'react';
import type { typeShopeeMallItem } from '../states/types';
import { Link } from 'react-router-dom';


function Item({src}: typeShopeeMallItem) {
    return ( 
        <Link className='' to='#'>
            <img className='w-full h-full' src={src}/>
        </Link>
     );
}

export default Item;