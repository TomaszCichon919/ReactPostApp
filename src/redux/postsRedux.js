import shortid from 'shortid';
//selectors
const REMOVE_POST = 'app/posts/REMOVE_CARD';
const ADD_POST = 'app/posts/ADD_CARD';
const EDIT_POST = 'app/posts/EDIT_CARD';

// actions

export const addPost = payload => ({ type: ADD_POST, payload });
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });
export const getPostsById = ({ posts }, PostId) => posts.find(post => post.id === PostId);
//export const getPostByCategory = ({posts}, categoryTitle) => posts.find(post => post.category === categoryTitle);
export const getPostByCategory = ({posts}, categoryTitle) => posts.filter(post => post.category === categoryTitle);

// export const getFilteredCards = ({ cards, searchString }, columnId) => cards
//   .filter(card => card.columnId === columnId && strContains(card.title, searchString));

//   export const getFavoriteCards = ({cards}) => cards
//   .filter(card => card.isFavorite === true);


// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload }];
    case REMOVE_POST:
      const updatedPosts = statePart.filter(post => post.id !== action.payload);
      statePart = updatedPosts
      return statePart;
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;