// reducers.js
const initialState = {
  data: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPEND_DATA':
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case 'REMOVE_FIRST_DATA':
      return {
        ...state,
        data: state.data.slice(1) // Remove the first element from the array
      };
    default:
      return state;
  }
};

export default dataReducer;