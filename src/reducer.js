const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter the value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if ((action.type = 'REMOVE_PERSON')) {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return { ...state, people: newPeople };
  }
  throw new Error('something went wrong');
};

export default reducer;
