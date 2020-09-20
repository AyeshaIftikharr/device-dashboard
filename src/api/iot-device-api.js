import axios from 'axios';
import * as c from './constants';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const IOTDeviceAPI = {
  onGetDeviceReadingsList: async () => {
    const URL = `${c.API_URL}/devices`;
    const { data } = await axios(URL, {
      ...PARAMS({ methodType: 'GET' }),
    });
    return data;
  },
  onUpdateDeviceReadingStatus: async ({ readingName, stateValue }) => {
    const URL = `${c.API_URL}/devices/${readingName}?active=${stateValue}`;
    const { data } = await axios(URL, {
      ...PARAMS({ methodType: 'PATCH' }),
    });
    return data;
  },
};
