// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
    a: 1, //для примера, добавим еще одно св-во
  },
  reducers: {
    //action
    deposit: (state, action) => {
      state.value += action.payload;
    },
    //action
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const persistConfig = {
  key: 'balance', // ключь для localStorage
  storage,
  whitelist: ['value'], // в массиве указываем те св-ва, которые нужно сохранить в LocalStorage
  // blacklist: ['a'], для тех св-в, которые не нужно сохранять
};

export const balanceReducer = persistReducer(persistConfig, balanceSlice.reducer);

// export const balanceReducer = balanceSlice.reducer;

// const balanceInitialState = {
//   value: 0,
// };

// export const deposit = createAction('balance/deposit'); ============

// export const deposit = item => {
//   return {
//     //тип action
//     type: 'balance/deposit',
//     payload: item,
//   };
// };

// ===================================================================
// export const withdraw = createAction('balance/withdraw'); ==========

// если нужно изменить вложенность payload: {}

// export const withdraw = createAction('balance/withdraw', x => {
//   return {
//     payload: {
//       value: x,
//     },
//   };
// });
// =========================================================================
// export const withdraw = item => {
//   return {
//     type: 'balance/withdraw',
//     payload: item,
//   };
// };

// ====================================================================

// export const balanceReducer = createReducer(balanceInitialState, builder =>
//   //builder - функция регистрации кейсов
//   //меняем 'balance/withdraw' на deposit
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload; // можно или мутацию применить, или вариант с return (ниже)
//       // return {
//       //   ...state,
//       //   value: state.value + action.payload,
//       // };
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload; //это не мутация, это копия, которую можно мутиров ать
//       // return {
//       //   ...state,
//       //   value: state.value - action.payload,
//       // };
//     })
// );

// export const balanceReducer = (state = balanceInitialState, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };
// =========================================================================
