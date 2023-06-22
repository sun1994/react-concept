export const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.data];
      break;
    case "COMPLETE_TODO":
      return state.map((val, i) => {
        if (val.id === action.id) {
          return { ...val, isComplete: !val.isComplete };
        }
        return val;
      });
      break;
    default:
      return state;
      break;
  }
};
