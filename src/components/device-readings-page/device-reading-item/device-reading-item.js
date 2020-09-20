import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../../utils';
import './styles.css';

export const DeviceReadingItem = ({
  name,
  unit,
  value,
  timestamp: timeStamp,
  active: activeStatus,
}) => {
  return (
    <div className='column'>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Unit</h3>
      <p>{unit || '-'}</p>
      <h3>Value</h3>
      <p>{value || '-'}</p>
      <h3>Date</h3>
      <p>{getFormattedDate(timeStamp)}</p>
      <h3>Status</h3>
      <p>{activeStatus ? 'Active' : 'InActive'}</p>
    </div>
  );
};

DeviceReadingItem.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};
