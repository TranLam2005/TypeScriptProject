import React from 'react';
export interface WrapperCategoryProps {
    Title: React.ComponentType<any>;
    Component: React.ComponentType<any>;
}


function WrapperCategory({Title, Component}: WrapperCategoryProps) {
    return ( 
        <div className='flex flex-col justify-between bg-white min-h-[200px]'>
            <div className='h-[60px] flex items-center justify-start'>
                <Title />
            </div>
            <Component className='flex-1' />
        </div>
     );
}

export default WrapperCategory;