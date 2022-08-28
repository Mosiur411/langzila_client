import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const ProjectsVideo = () => {
    const [widthhynakan, setwidthhynaka] = useState(false)

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth >= 900) {
            setwidthhynaka(!widthhynakan)
        }
    })

    return (
        <div className='relative'>
            <div className='w-full mx-auto'>
                <ReactPlayer width={widthhynakan ? "300px" : "700px"} className="absolute top-0 left-0 right-0 bottom-0  mx-auto" controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                <div>
                    <img className='relative ml-60 pt-24 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape9.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProjectsVideo;