const storiesReducer = (state, action) => {
  switch (action.type) {
  case 'SET_STORIES':
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  case 'STORIES_FETCH_INIT':
    return {
      ...state,
      isError: null,
      isLoading: true,
    };
  case 'STORIES_FETCH_ERROR':
    return {
      ...state,
      isError: true,
      isLoading: false
    };
  default:
    throw new Error('Action type missing');
  }
};

export { storiesReducer };