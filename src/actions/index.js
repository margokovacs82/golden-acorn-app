export const decrement = (amount) => {
  return {
    type: 'DECREMENT',
    amount,
  };
};

export const increment = (amount) => {
  return {
    type: 'INCREMENT',
    amount,
  };
};

export const showImg = (img) => {
  return {
    type: 'SHOW_IMG',
    img,
  };
};

export const hideImg = (img) => {
  return {
    type: 'HIDE_IMG',
    img,
  };
};
