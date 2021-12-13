export const todoReducer = (state = [], { type, payload }) => {
    console.log(payload,'payload')
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

      case "UPDATE_TODO":
          const index = state.indexOf(payload.data)
          const newData = [...state];
          newData[index] = payload.update;
          return newData;

    default:
      return state;
  }
};
