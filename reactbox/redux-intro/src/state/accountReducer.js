let initialState = { balance: 0 };

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + payload.amount };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - payload.amount };
    default:
      return state;
  }
};

export default accountReducer;
