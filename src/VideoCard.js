import React from 'react'

const VideoCard = ({ info }) => {
    console.log("info videos", info)

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 w-72 m-2 shadow-lg'>
        <img alt="video" src={thumbnails.medium.url} className='rounded-lg' ></img>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard