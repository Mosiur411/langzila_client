import React from 'react';
import ReactPlayer from 'react-player';

const ProjectsVideo = () => {
    return (
        <div className='lg:ml-96 md:ml-8 px-5 relative'>
            <div>
                <ReactPlayer className="absolute lg:hidden block" width={'400px'} controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                <ReactPlayer className="absolute lg:hidden md:block hidden" width={'700px'} height={'400px'} controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                <ReactPlayer className="absolute lg:block hidden" width={'800px'} height={'500px'} controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                <div>
                    <img className='relative -ml-24 pt-24 lg:block hidden' src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape9.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProjectsVideo;