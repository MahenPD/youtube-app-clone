import React from 'react'
import "./RecommendedVideo.css"
import VideoCard from './VideoCard'

function RecommendedVideo() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div class="recommendedVideos__videos">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideo
