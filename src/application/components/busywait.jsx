import React from 'react';

//Classname constants
const FADING_CIRCLE = 'ui-fading-circle',
      UI_CIRCLE = 'ui-circle';

const BusyWait = ({isBusy, className}) => {    
    let spinner = null;
    if(isBusy) {
        let circles = [...Array(13)].map((_, i) => {
            return ( <div key={i} className={`${UI_CIRCLE + i} ${UI_CIRCLE}`}></div> )
        });
        spinner = (
            <div className={[FADING_CIRCLE, className].join(' ').trim()}>
                {circles}
            </div>
        )
    }
    return spinner;
}

export default BusyWait;
