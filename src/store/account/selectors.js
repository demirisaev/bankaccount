export const selectCardsAccount = (reduxState) => reduxState.account.cards;
export const selectSavingAccount = (reduxState) => reduxState.account.savings;
export const selectCheckingAccount = (reduxState) =>
  reduxState.account.checkingAccount;
export const selectPrivateMode = (reduxState) => reduxState.account.privateMode;
