const storiesReducer = (state, action) => {
  switch (action.type) {
  case 'SET_STORIES':
    return {
      ...state,
      data: action.payload,
    };
  default:
    throw new Error('Action type missing');
  }
};

export { storiesReducer };