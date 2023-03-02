import React, { useState } from 'react';
import './About.css'

const About = () => {
    return (
        <div className='masterContainer'>
            <div className='leftContent'>About Myself</div>
            <div className='rightContent'>
                <div className='name'>Daniel Christy</div>
                <div className='intro'>Hello, my name's Daniel.  I am 25 years old studying full stack web development throught a bootcamp at Michigan State Univeristy.</div>
            </div>
        </div>
    )
}

export default About;

// {
//     return (
//         <div className='container'>
//             <div className='aboutIntro'></div>
//             <div className='aboutText'>Hello, my name's Daniel.  I am 25 years old studying full stack web development throught a bootcamp at Michigan State Univeristy.  
//             </div>
//         </div>
//     )
// }