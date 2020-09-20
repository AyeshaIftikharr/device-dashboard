import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../../utils';
import './styles.css';

export const DeviceReadingItem = ({
  item: { name, unit, value, timestamp: timeStamp, active: activeStatus },
  onToggleReadingStatus,
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

      <h3>Toggle Status</h3>
      <label className='switch' htmlFor='toggle'>
        <input
          id='toggle'
          type='checkbox'
          checked={activeStatus}
          onChange={() => onToggleReadingStatus(name, !activeStatus)}
        />
        <span className='slider round' />
      </label>
    </div>
  );
};

DeviceReadingItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleReadingStatus: PropTypes.func.isRequired,
};
