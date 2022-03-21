// an action creator is a junction that dispatches a function

// deposit is an action creator function that decreases the balance
export const deposit = (amount) => {
  return {
    type: 'DEPOSIT',
    payload: { amount },
  };
};

// withdraw is an action creator function that increases the balance
export const withdraw = (amount) => {
  return {
    type: 'WITHDRAW',
    payload: { amount },
  };
};
