import React from 'react';
import { ToastContainer } from 'react-toastify';
import { DeviceReadingsPage } from './components';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <>
    <DeviceReadingsPage />
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      draggable
    />
  </>
);
