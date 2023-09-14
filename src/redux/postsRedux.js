import shortid from 'shortid';
//selectors
const REMOVE_POST = 'app/posts/REMOVE_CARD';
const ADD_POST = 'app/posts/ADD_CARD';

export const addPost = payload => ({ type: ADD_POST, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });


export const getPostsById = ({posts}, PostId) => posts.find(post => post.id === PostId);

// actions
//const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, {id: shortid(), ...action.payload }];
    case REMOVE_POST:
      const updatedPosts = statePart.filter(post => post.id !== action.payload);
      statePart = updatedPosts
      return statePart;
    default:
      return statePart;
  };
};

export default postsReducer;