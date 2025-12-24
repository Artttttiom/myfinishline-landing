import { IContract } from "@/app/types";
import { IUser } from "@/app/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  user: IUser;
  contracts: IContract[];
  completedContracts: IContract[];
} = {
  user: {
    avatar_url: null,
    country: null,
    created_at: "",
    email: "",
    first_name: "",
    full_avatar_url: null,
    has_activated_code: null,
    id: null,
    last_name: null,
    phone: null,
    strava_id: null,
    total_activities_count: 0,
    total_distance: 0,
    total_moving_time_hours: 0,
    updated_at: "",
    username: "",
    has_strava_connect: false,
    avatar_symbol: "",
    avatar_color: "#fff",
  },
  contracts: [],
  completedContracts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setUserContracts: (state, action: PayloadAction<IContract[]>) => {
      state.contracts = action.payload;
    },
    setUserCompletedContracts: (state, action: PayloadAction<IContract[]>) => {
      state.completedContracts = action.payload;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const {
  setUser,
  updateUser,
  setUserContracts,
  setUserCompletedContracts,
  clearUser,
} = userSlice.actions;
export default userSlice.reducer;
