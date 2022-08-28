import React from 'react';
import ReactTimeAgo from 'react-time-ago';

const LastSeen = ({ date }) => {
  return (
    <div>

      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />

    </div>
  );
};

export default LastSeen;