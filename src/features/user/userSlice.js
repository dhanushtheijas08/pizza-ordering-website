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

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function getAddress({ lat, lng }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const data = await res.json();
  return data;
}

async function getuserAddress() {
  const positionObj = await getPosition();
  const position = {
    lat: positionObj.coords.latitude,
    lng: positionObj.coords.longitude,
  };

  const address = await getAddress(position);

  return `${address.city}, ${address.countryName}`;
}

export const { updateUserName, updateUserAddress } = userSlice.actions;

function updateAddress() {
  return updateUserAddress({ type: 'updateUserAddress', payload: 'Hi' }); // Dispatch the correct action creator
}
export { updateAddress };

export default userSlice.reducer;
