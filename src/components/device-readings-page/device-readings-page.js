import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
// components
import { DeviceReadingItem } from './device-reading-item';
import { StatusCounter } from './status-counter';
import { EmptyPlaceholder } from './empty-placeholder';
// api
import { IOTDeviceAPI } from '../../api';
// utils
import { extractErrorMessage } from '../../utils';
// styles
import './styles.css';

// utility Function
const getUpdatedList = (list, readingName, statusValue) => {
  return list.map((item) => {
    if (item.name === readingName) {
      return {
        ...item,
        active: statusValue,
      };
    }
    return item;
  });
};

export const DeviceReadingsPage = () => {
  const [deviceReadingsList, setDeviceReadingsList] = useState([]);
  const [filteredDeviceReadingsList, setFilteredDeviceReadingsList] = useState([]);

  const onFetchDeviceReadingsList = async () => {
    try {
      const response = await IOTDeviceAPI.onGetDeviceReadingsList();
      setDeviceReadingsList(response.data);
      setFilteredDeviceReadingsList(response.data);
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    onFetchDeviceReadingsList();
  }, []);

  const onFilterDeviceReadingList = (readingName) => {
    // reset on clearing out the input
    if (!readingName) {
      setFilteredDeviceReadingsList(deviceReadingsList);
      return;
    }
    const filteredList = deviceReadingsList.filter((item) => item.name.includes(readingName));
    setFilteredDeviceReadingsList(filteredList);
  };

  const onChangeSearchInputText = (e) => {
    onFilterDeviceReadingList(e.target.value);
  };

  const onToggleReadingStatus = async (readingName, statusValue) => {
    try {
      await IOTDeviceAPI.onUpdateDeviceReadingStatus({ readingName, statusValue });
      setDeviceReadingsList(getUpdatedList(deviceReadingsList, readingName, statusValue));
      setFilteredDeviceReadingsList(
        getUpdatedList(filteredDeviceReadingsList, readingName, statusValue),
      );
      toast.success('Status updated successfully!');
    } catch (error) {
      toast.error('Something went wrong! Unable to change status');
    }
  };

  return (
    <main>
      {/* Search Input & Counter */}
      <div className='row spacer'>
        <div className='input-section'>
          <p className='heading2'>Device Readings Dashboard - Ayesha Iftikhar</p>
          <input
            type='text'
            placeholder='Search by name'
            name='search'
            onChange={onChangeSearchInputText}
            className='text-input'
          />
        </div>
        <StatusCounter deviceReadingsList={filteredDeviceReadingsList} />
      </div>

      {/* Readings List */}
      <div className='row'>
        {filteredDeviceReadingsList.map((item) => (
          <DeviceReadingItem
            key={item.name}
            item={item}
            onToggleReadingStatus={onToggleReadingStatus}
          />
        ))}
        {!filteredDeviceReadingsList.length && <EmptyPlaceholder />}
      </div>
    </main>
  );
};
