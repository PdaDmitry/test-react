import { createSlice } from '@reduxjs/toolkit';

const lacalSlice = createSlice({
  name: 'lacal',
  initialState: {
    lang: 'uk',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = lacalSlice.actions;
export const localReducer = lacalSlice.reducer;

// const localInitialState = {
//   lang: 'uk',
// };

// export const changeLang = item => {
//   return {
//     type: 'local/changeLang',
//     payload: item,
//   };
// };

// export const localReducer = (state = localInitialState, action) => {
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
