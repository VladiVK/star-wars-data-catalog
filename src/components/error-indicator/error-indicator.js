
import React from 'react';
import specialImage from './storm-trooper.png';

const ErrorIndicator = () => {
    return (
        <div className='text-warning d-flex flex-column justify-content-center'>
            <div className='text-center'>
                <img src={specialImage} alt="Storm Trooper Head"/>
            </div>
            <div className='text-center font-weight-bold display-4'>Ooh, La, La</div>
            <div className='text-center'>Something has gone terribly wrong</div>
            <div className='text-center'>(but droids had already been sent!)</div>
        </div>
    )
}

export default ErrorIndicator;