import React, { useState } from 'react'
import video1 from '../assets/video/Ferrari-1.mp4';

function Home(){

    return(
        <div className="w-full">
            <video className="absolute top-0 left-0 w-full h-full object-cover" src={video1} autoPlay loop muted playsInline ></video>

        </div>
    )
}

export default Home