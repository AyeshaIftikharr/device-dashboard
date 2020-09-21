import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// utility function
const getStatusCount = (deviceReadingsList) => {
  const INITIAL_COUNTER = {
    activeCount: 0,
    inActiveCount: 0,
  };
  return deviceReadingsList.reduce((counter, reading) => {
    const { activeCount, inActiveCount } = counter;
    return {
      activeCount: reading.active ? activeCount + 1 : activeCount,
      inActiveCount: !reading.active ? inActiveCount + 1 : inActiveCount,
    };
  }, INITIAL_COUNTER);
};

export const StatusCounter = ({ deviceReadingsList }) => {
  const counter = getStatusCount(deviceReadingsList);
  return (
    <div className='counter-section paper'>
      <p className='heading2-black'>Counter</p>
      <hr />
      <div className='row justify-space-between'>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>Active</p>
          <p>{counter.activeCount}</p>
        </div>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>InActive</p>
          <p>{counter.inActiveCount}</p>
        </div>
      </div>
    </div>
  );
};

StatusCounter.propTypes = {
  deviceReadingsList: PropTypes.array,
};

StatusCounter.defaultProps = {
  deviceReadingsList: [],
};
