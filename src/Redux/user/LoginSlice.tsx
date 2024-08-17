import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  NewUser: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Password: string;
  };
  exsitEmail: boolean;
  DefaultUserEmail: string;
  DefaultUserPassword: string;
  isloggin: boolean;
}
const initialState: IProductsState = {
  NewUser: {
    FirstName: "Abdallh",
    LastName: "Rakha",
    Phone: "01091415560",
    Email: "Ahmeddel400@gmail.com",
    Password: "87654321@",
  },
  DefaultUserEmail: "abdallhsabry194@gmail.com",
  DefaultUserPassword: "12345678@",
  exsitEmail: false,
  isloggin: false,
};
const loginSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ValidateEmailAddress: (state, action) => {
      if (state.NewUser.Email == action.payload) {
        state.exsitEmail = true;
      } else {
        state.exsitEmail = false;
      }
    },
    AddNewUser: (state, action) => {
      if (state.exsitEmail == false) {
        state.NewUser = action.payload;
      }
    },
    ActiveLogin: (state) => {
      state.isloggin = true;
    },
    ActiveLogOut: (state) => {
      state.isloggin = false;
    },
  },
});

export const { AddNewUser, ValidateEmailAddress, ActiveLogin, ActiveLogOut } =
  loginSlice.actions;

export default loginSlice.reducer;
