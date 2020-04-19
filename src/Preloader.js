import React from 'react';
import preloader from './assets/animation/index.infinity-rotate-cycle-loader.svg'

const Preloader = (props)=> {
return (
    <div className='preloader'>
        <img src={preloader} alt=""/>
    </div>
)
}
export default Preloader
