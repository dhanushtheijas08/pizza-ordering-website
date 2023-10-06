import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  userAddress: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.username = action.payload;
    },
    updateUserAddress(state, action) {
      state.userAddress = action.payload;
    },
  },
});

function fetchPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject); // Corrected function name
  });
}

async function fetchAddress({ lat, lng }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const data = await res.json();
  return data;
}

async function fetchUserAddress() {
  const positionObj = await fetchPosition();
  const position = {
    lat: positionObj.coords.latitude,
    lng: positionObj.coords.longitude,
  };

  const address = await fetchAddress(position);
  return `${address.city}, ${address.principalSubdivision}, ${address.countryName}`;
}

export const updateAddress = () => async (dispatch) => {
  const address = await fetchUserAddress();
  dispatch({ type: 'userSlice/updateUserAddress', payload: address });
};

export const getUsername = (state) => state.user.username;
export const getUserAddress = (state) => state.user.userAddress;
export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
