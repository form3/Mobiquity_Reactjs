import React from 'react';

const SRC_ROOT = `${process.env.ASSET_ROOT}`;

const Image = ({src, className}) => {    
    return (        
        <img className={['img-standard', className].join(' ').trim()} 
             src={`/${SRC_ROOT}/${src}`}
        />            
    )
}

export default Image;