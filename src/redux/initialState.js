import DateToString from "../utils/DateToString/DateToString";
const initialState = {
    posts: [
        {
          id: '1',
          title: 'Article title',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '2',
          title: 'Article title 2',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '3',
          title: 'Article title 3',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '4',
          title: 'Article title 4',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
    ]
};

export default initialState;