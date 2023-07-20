import { createSlice } from "@reduxjs/toolkit";


interface AuthModalState {
  status: number;
}

const initialState: AuthModalState  = {
  status: 0,
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openSigninModal: (state) => {
      state.status = 1;
    },
    openSignupModal: (state) => {
      state.status = 2;
    },
    closeAuthModal: (state) => {
      state.status = 0;
    }
  }
});

export const {openSigninModal, openSignupModal, closeAuthModal} = authModalSlice.actions;

