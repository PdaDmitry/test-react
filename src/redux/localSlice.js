const localInitialState = {
  lang: 'uk',
};

export const changeLang = item => {
  return {
    type: 'local/changeLang',
    payload: item,
  };
};

export const localReducer = (state = localInitialState, action) => {
  switch (action.type) {
    case 'local/changeLang':
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};
