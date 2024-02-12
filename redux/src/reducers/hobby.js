const initState = { list: [1, 2, 3], activeId: null };

const hobbyReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_HOBBY":
      const newList = [...state.list];
      newList.push(action.payload);
      // console.log(newList);
      return { ...state, list: newList };
    case "SET_ACTIVE_HOBBY":
      const newActiveId = action.payload.id;
      return { ...state, activeId: newActiveId };
    default:
      return state;
  }
};
export default hobbyReducer;
