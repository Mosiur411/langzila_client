import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './EnglishVideo.css'

const EnglishVideo = () => {


    const [videoref, setVideoref] = useState();
    const [active, setActive] = useState(0);
    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        fetch('/EnglishVideo.json')
            .then(res => res.json())
            .then(data => setVideoData(data))
    }, [])


    console.log(videoData);
    console.log(videoref)



    return (
        <div className=' mt-10 h-auto py-20'>
            <div className=' flex items-center justify-between max-w-6xl mx-auto'>

                <div data-aos="fade-up-right" className=' px-5 shadow-md overflow-y-auto h-[49vh] w-[50%] scrollbar'>


                    {
                        videoData.map((video, i) =>
                            <div key={i} className={`w-96 h-20 mx-auto rounded-lg shadow-md flex items-center my-10  bg-purple-900 ${active == i ? video.color : 'bg-purple-900'} p-1 cursor-pointer`}>
                                <div>
                                    <img className='h-20 w-32' src={video.image} alt="videoImg" />
                                </div>
                                <div className=' h-20 w-full  '>
                                    <div onClick={() => (setVideoref(video.videoURL), setActive(i))} >
                                        <h1 className=' text-lg mt-1 font-semibold text-yellow-300 '>{video.title}</h1>
                                        <p className=' text-white opacity-80 text-sm px-2 mt-1 mb-2'>{video.text}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>


                <div data-aos="fade-down-left" className=' bg-red-400 rounded h-[48vh] w-[57%] ml-10 '>
                    <VideoPlayer videoref={videoref || 'https://www.youtube.com/watch?v=p-kAI-qOeJA'} className='h-full rounded-lg' />
                </div>

            </div>

        </div>
    );
};

export default EnglishVideo;