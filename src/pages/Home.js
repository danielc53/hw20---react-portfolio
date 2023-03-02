import React, { useState } from 'react';
import './Home.css'


const Home = () => {
    return (
        <div className='masterContainer'>
            <div className='leftContent'>Welcome to my Page</div>
            <div className='rightContent'>
                <div className='name'>Daniel Christy</div>
                <div className='intro'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </div>
            </div>
        </div>
    )
}

export default Home;