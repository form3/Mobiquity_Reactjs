import React from 'react';
const SRC_ROOT = `${process.env.ASSET_ROOT}`;

const BackgroundImage = ({src, children, className}) => {
    const style = {
        backgroundImage: `url(/${SRC_ROOT}/${src})`,
        backgroundSize: 'cover'
    };
    return (
        <div style={style} className={['img-backdrop', className].join(' ').trim()}>
            {children}
        </div>
    )    
};

export default BackgroundImage;