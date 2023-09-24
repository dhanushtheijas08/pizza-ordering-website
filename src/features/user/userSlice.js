import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
