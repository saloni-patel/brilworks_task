export const todoReducer = (state = [], { type, payload }) => {
    console.log(payload,'payload')
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

      case "UPDATE_TODO":
        const newData = state.find((item) => item.id === payload.id);
        return newData;

    default:
      return state;
  }
};
