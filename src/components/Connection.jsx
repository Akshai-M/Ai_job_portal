import React from 'react';

const Connection = ({ from, to }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: from.top + 'px',
        left: from.left + 'px',
        width: to.left - from.left + 'px',
        height: '2px',
        backgroundColor: 'black',
      }}
    />
  );
};

export default Connection;
