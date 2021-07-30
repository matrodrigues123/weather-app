const initialState = {
  cityInfo: {},
};
export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Set City":
      const temp = {
        cityInfo: payload,
      };
      state = temp;
      return state;
    default:
      return state;
  }
};
