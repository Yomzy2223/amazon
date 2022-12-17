import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    language: "English",
    locationModal: false,
    userLogin: {
      email: "",
      password: "",
    },
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload.language;
    },
    setLocationModal: (state, action) => {
      switch (action.payload) {
        case "on":
          state.locationModal = true;
          break;
        case "off":
          state.locationModal = false;
          break;
        default:
          state.locationModal = false;
      }
    },
    setUserEmail: (state, action) => {
      state.userLogin.email = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userLogin.password = action.payload;
    },
  },
});

export const {
  changeLanguage,
  setLocationModal,
  setUserEmail,
  setUserPassword,
} = userSlice.actions;
export default userSlice.reducer;
