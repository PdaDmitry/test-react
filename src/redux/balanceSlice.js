const balanceInitialState = {
  value: 0,
};

export const deposit = item => {
  return {
    //тип action
    type: 'balance/deposit',
    payload: item,
  };
};

export const withdraw = item => {
  return {
    type: 'balance/withdraw',
    payload: item,
  };
};

export const balanceReducer = (state = balanceInitialState, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      };

    case 'balance/withdraw':
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
