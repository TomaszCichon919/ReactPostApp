import shortid from 'shortid';
const ADD_CATEGORY = 'app/categories/ADD_CATEGORY';


export const getCategoryByTitle = ({categories}, categoryTitle) => categories.find(category => category.title === categoryTitle);
export const addCategory = payload => ({ type: ADD_CATEGORY, payload });


const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_CATEGORY:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };
  export default categoriesReducer;