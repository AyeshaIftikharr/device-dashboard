import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../../utils';
import './styles.css';

export const DeviceReadingItem = ({
  item: { name, unit, value, timestamp: timeStamp, active: activeStatus },
  onToggleReadingStatus,
}) => {
  return (
    <div className='column paper reading-item-section'>
      <div className='row justify-space-between'>
        <div className='column half-width'>
          <p className='heading-gray'>Reading Name</p>
          <p>{name}</p>
        </div>
        <div className='column half-width'>
          <p className='heading-gray'>Toggle Status</p>
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
      </div>
      <hr />
      <div className='row justify-space-between'>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>Unit</p>
          <p>{unit || '-'}</p>
        </div>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>Value</p>
          <p>{value || '-'}</p>
        </div>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>Timestamp</p>
          <p>{getFormattedDate(timeStamp)}</p>
        </div>
        <div className='column half-width margin-top'>
          <p className='heading-gray'>Status</p>
          <p>{activeStatus ? 'Active' : 'InActive'}</p>
        </div>
      </div>
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
