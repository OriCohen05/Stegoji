export const appendData = (data) => {
  return {
    type: 'APPEND_DATA',
    payload: data
  };
};
export const removeFirstData = () => {
  return {
    type: 'REMOVE_FIRST_DATA'
  };
};