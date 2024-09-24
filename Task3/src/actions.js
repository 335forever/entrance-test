import axios from 'axios';

export const loadPostById = (id, index) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ 
        type: 'LOAD_POST_BY_ID', 
        payload: {index, data : response.data}
      });
    } catch (error) {
        console.error("Error fetching post:", error);
    }
  };
};

export const newPost = (title, body) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {title, body});
      dispatch({ 
        type: 'NEW_POST', 
        payload: response.data
      });
    } catch (error) {
        console.error("Error posting:", error);
    }
  };
};
