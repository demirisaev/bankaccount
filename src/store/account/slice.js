import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkingAccount: 1000,
  savings: 8000,
  cards: [
    { id: 1, blocked: false, limit: 200, max: 5000 },
    { id: 2, blocked: true, limit: 300, max: 2000 },
    { id: 3, blocked: true, limit: 700, max: 4000 },
    { id: 4, blocked: false, limit: 100, max: 500 },
  ],
  privateMode: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    blockedToggle: (state, action) => {
      const blockedId = action.payload;

      const updatedCards = state.cards.map((b) => {
        if (b.id === blockedId) {
          return { ...b, blocked: !b.blocked };
        } else {
          return b;
        }
      });
      console.log("Blocked Id :", updatedCards);
      state.cards = updatedCards;
      //   state.blocked.push(updatedCards[blockedId]);
    },
    deposit: (state, action) => {
      state.checkingAccount = state.checkingAccount + action.payload;
    },
    withdraw: (state, action) => {
      state.checkingAccount = state.checkingAccount - action.payload;
    },
    toChecking: (state, action) => {
      state.checkingAccount = state.checkingAccount - action.payload;
    },
    toSaving: (state, action) => {
      state.savings = state.savings + action.payload;
    },
    cardLimits: (state, action) => {
      const cardId = action.payload;
      const updatedLimit = state.cards.map((l) => {
        if (l.id === cardId) {
          return { ...l, limit: !l.limit };
        } else {
          return l;
        }
      });
      console.log("Card Id :", updatedLimit);
      state.cards = updatedLimit;
      //   state.limit.push(updatedLimit[cardId]);
    },
  },
});

export const {
  blockedToggle,
  deposit,
  withdraw,
  toChecking,
  toSaving,
  cardLimits,
} = accountSlice.actions;
export default accountSlice.reducer;
