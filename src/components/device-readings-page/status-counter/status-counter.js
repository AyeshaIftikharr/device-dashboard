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
    <div className='row'>
      <h3>Active</h3>
      <p>{counter.activeCount}</p>
      <h3>InActive</h3>
      <p>{counter.inActiveCount}</p>
    </div>
  );
};

StatusCounter.propTypes = {
  deviceReadingsList: PropTypes.array,
};

StatusCounter.defaultProps = {
  deviceReadingsList: [],
};
