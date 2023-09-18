
const initialState = {
    posts: [
        {
          id: '1',
          title: 'Article title',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          category: 'News',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '2',
          title: 'Article title 2',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          category: 'Sport',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '3',
          title: 'Article title 3',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          category: 'Sport',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
        {
          id: '4',
          title: 'Article title 4',
          shortDescription: 'Short description of the article...',
          content: 'Main content of the article',
          category: 'News',
          publishedDate: new Date(2023, 9, 9),
          author: 'John Doe'
        },
    ],

    categories: [
      {
        id: '1',
        title: 'News',
      },
      {
        id: '2',
        title: 'Sport',
      },
      {
        id: '3',
        title: 'Movies',
      },
    ]
};

export default initialState;