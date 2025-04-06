import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FaydaSchema } from "../schema";

const initialState: FaydaSchema = {
  id: "",
  fullName: "",
  phoneNumber: "",
  dateofbirth: "",
  gender: "",
  nationality: "",
  city: "",
  subcity: "",
  woreda: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FaydaSchema>) => {
      return { ...state, ...action.payload};
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
