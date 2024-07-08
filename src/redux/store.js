import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './balanceSlice';
import { localReducer } from './localSlice';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';

// ==================================================================
//лучше делать эту часть в файле слайса
// const persistConfig = {
// key: 'balance', // ключь для localStorage
// storage,
// whitelist: ['value'], // в массиве указываем те св-ва, которые нужно сохранить в LocalStorage
// blacklist: ['a'], для тех св-в, которые не нужно сохранять
// };

// const persistedBalanceReducer = persistReducer(persistConfig, balanceReducer); // сохраняем в LocalStorage value: 0, из balanceSlice.js(только для balance)

// let store = createStore(persistedReducer);
// let persistor = persistStore(store);
// ====================================================================
export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    local: localReducer,
  },
  // эта секция, чтобы в localStorage можно было записывать функции
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);

// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   local: localReducer,
// });

// export const store = createStore(rootReducer, devToolsEnhancer());
// =========================================================================

//выносим в отдельный файл localSlice.js все, что касается local
// export const changeLang = item => {
//   return {
//     type: 'local/changeLang',
//     payload: item,
//   };
// };

// const localInitialState = {
//   lang: 'uk',
// };

// const localReducer = (state = localInitialState, action) => {
//   switch (action.type) {
//     case 'local/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// ======================================================================

//выносим в отдельный файл balanceSlice.js все, что касается balance

// const balanceInitialState = {
//   value: 0,
// };

//action
// export const deposit = item => {
//   return {
//     //тип action
//     type: 'balance/deposit',
//     payload: item,
//   };
// };

// export const withdraw = item => {
//   return {
//     type: 'balance/withdraw',
//     payload: item,
//   };
// };

// const balanceReducer = (state = balanceInitialState, action) => {
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
// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   local: localReducer,
// });

// export const store = createStore(rootReducer, devToolsEnhancer());
// =========================================================================
//начальное состояние
// const initialState = {
//   // начало слайса
//   balance: {
//     value: 0,
//   }, //конец слайса
//   local: {
//     lang: 'uk',
//   },
// };

//корневой редьюсер
// const rootReducer = (state = initialState, action) => {
//   console.log(action);
//   //swiych делает различия по (action.type)
//   switch (action.type) {
//     //когда case соответствует типу action - меняется/возвращает стан
//     case 'balance/deposit':
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//           //никогда нельзя мутировать стан!!!!!! Только к поточному состоянию добавляем или отнимаем
//         },
//       };

//     case 'balance/withdraw':
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };

//     case 'local/changeLang':
//       return {
//         ...state, //каждый уровень вложенности обязательно нужно распыливать
//         local: {
//           ...state.local,
//           lang: action.payload,
//         },
//       };

//     // если не пришло никаких изменений - венуть текущий стан
//     default:
//       return state;
//   }
// };

// export const store = createStore(rootReducer, devToolsEnhancer());
