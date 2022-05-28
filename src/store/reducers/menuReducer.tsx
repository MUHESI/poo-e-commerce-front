
const menuReducer = (state = {}, action: any) => {

  switch (action.type) {
    case 'menu':
      return action.payload;
    default:
      return state;
  }
};

export default menuReducer;
