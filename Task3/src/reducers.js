import _ from 'lodash'

const initialState = {
  posts : []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POST_BY_ID': {      
      const newPosts = [...state.posts];
      newPosts[action.payload.index] = action.payload.data;
      return {posts : newPosts};
    }
    case 'NEW_POST': {
      const newPosts = [...state.posts];
      newPosts.push(action.payload);
      return {posts : newPosts};
    }
    default:
      return state;
  }
};

export default rootReducer;
