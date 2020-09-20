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

  return (
    <>
      {/* Counter */}
      <StatusCounter deviceReadingsList={filteredDeviceReadingsList} />

      {/* Search Input */}
      <input
        type='text'
        placeholder='Search by name'
        name='search'
        onChange={onChangeSearchInputText}
      />

      {/* Readings List */}
      <div className='row'>
        {filteredDeviceReadingsList.map((item) => (
          <DeviceReadingItem key={item.name} {...item} />
        ))}
        {!filteredDeviceReadingsList.length && <EmptyPlaceholder />}
      </div>
    </>
  );
};
