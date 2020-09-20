/**
 * New JavaScript features:
 * Optional Chaining (?.) and Nullish Coalescing (??) operators
 */
// const extractErrorMessage = (error) => error?.response?.data?.message ?? error.message ?? 'Something went wrong!';

// Babel plugins are required for above syntax

export const extractErrorMessage = (error) => {
  return error.response
    ? (error.response.data && error.response.data.message) || 'Something went wrong.'
    : 'Something went wrong.';
};

export const getFormattedDate = (timeStamp) => {
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(timeStamp);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
