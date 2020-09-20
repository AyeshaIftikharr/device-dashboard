import React from 'react';
import { ToastContainer } from 'react-toastify';
import { DeviceReadingsPage } from './components/device-readings-page';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <>
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      draggable
    />
    <DeviceReadingsPage />
  </>
);
