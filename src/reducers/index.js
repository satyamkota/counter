const initialState = {
    value: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_VALUE':
        return {
          ...state,
          value: state.value + 1
        };
      case 'DECREASE_VALUE':
        return {
          ...state,
          value: state.value > 0 ? state.value - 1 : 0
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  