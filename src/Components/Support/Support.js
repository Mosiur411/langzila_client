import React from 'react';
import support from '../assets/support/support.jpg'

const Support = () => {
    return (
        <div className='flex'>
            <div>
                <h2>Help Desk Support</h2>
                <p>Welcome to LangZila support center. If you have trouble understanding something. Course related or website related or something else. Then please come to our meet support session by clicking the button below. We love to help you</p>
            </div>
            <div>
                <img src={support} alt="" />
            </div>
        </div>
    );
};

export default Support;