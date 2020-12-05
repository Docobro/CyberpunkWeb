import React from 'react'
import Videoplayback from "../video/videoplayback.mp4"


function Background() {
    return (
        <div className ="video">
            <video playsinline autoPlay loop muted>
                <source src={Videoplayback} type="video/mp4" /> 
            </video>
        </div>
    );
}

export default Background;