import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IOTDeviceAPI } from '../../api';
import { extractErrorMessage } from '../../utils';

export const DeviceReadingsPage = () => {
  const [deviceReadingsList, setDeviceReadingsList] = useState([]);

  const onFetchDeviceReadingsList = async () => {
    try {
      const response = await IOTDeviceAPI.onGetDeviceReadingsList();
      setDeviceReadingsList(response);
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    onFetchDeviceReadingsList();
  }, []);

  return (
    <div>
      <h1>Relayr Device Dashboard</h1>
      <p>Feel free to implement UI the way you like.</p>
      {JSON.stringify(deviceReadingsList, null, 2)}
    </div>
  );
};
