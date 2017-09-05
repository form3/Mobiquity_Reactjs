import React from 'react';

const Card = ({children, className}) => (
    <div className={['card', className].join(' ').trim()}>         
        {children}        
    </div>
)

export default Card;