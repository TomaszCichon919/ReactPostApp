
export const getCategoryByTitle = ({categories}, categoryTitle) => categories.find(category => category.title === categoryTitle);


const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
      default:
        return statePart;
    };
  };
  export default categoriesReducer;