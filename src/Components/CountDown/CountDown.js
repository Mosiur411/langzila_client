import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './CountDown.css'

const CountDown = ({ date }) => {
    console.log(date)
    return (
        <FlipClockCountdown className='flip-clock '
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        >
            Finished
        </FlipClockCountdown>
    );
};

export default CountDown;