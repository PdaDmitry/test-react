import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

//action
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

export const changeLang = item => {
  return {
    type: 'local/changeLang',
    payload: item,
  };
};

//начальное состояние
const initialState = {
  // начало слайса
  balance: {
    value: 0,
  }, //конец слайса
  local: {
    lang: 'uk',
  },
};

//корневой редьюсер
const rootReducer = (state = initialState, action) => {
  console.log(action);
  //swiych делает различия по (action.type)
  switch (action.type) {
    //когда case соответствует типу action - меняется/возвращает стан
    case 'balance/deposit':
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value + action.payload,
          //никогда нельзя мутировать стан!!!!!! Только к поточному состоянию добавляем или отнимаем
        },
      };

    case 'balance/withdraw':
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value - action.payload,
        },
      };

    case 'local/changeLang':
      return {
        ...state, //каждый уровень вложенности обязательно нужно распыливать
        local: {
          ...state.local,
          lang: action.payload,
        },
      };

    // если не пришло никаких изменений - венуть текущий стан
    default:
      return state;
  }
};

export const store = createStore(rootReducer, devToolsEnhancer());
