import axios from 'axios';
import * as c from './endpoints';

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
  onUpdateDeviceReadingStatus: async ({ readingName, statusValue }) => {
    const URL = `${c.API_URL}/devices/${readingName}?active=${statusValue}`;
    const { data } = await axios(URL, {
      ...PARAMS({ methodType: 'PATCH' }),
    });
    return data;
  },
};
