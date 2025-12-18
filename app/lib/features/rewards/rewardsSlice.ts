import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReward } from "@/app/types";

const initialState: { rewards: IReward[] } = {
  rewards: [],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    setRewards: (state, action: PayloadAction<IReward[]>) => {
      state.rewards = action.payload;
    },
  },
});

export const { setRewards } = rewardsSlice.actions;
export default rewardsSlice.reducer;
