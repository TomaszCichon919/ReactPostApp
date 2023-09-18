import Main from './components/pages/Main/Main.js';
import Add from './components/pages/Add/Add.js';
import About from './components/pages/About/About.js';
import Categories from './components/pages/Categories/Categories.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound.js';
import Post from './components/pages/Post/Post.js';
import Edit from './components/pages/Edit/Edit.js';
import Footer from './components/views/Footer/Footer.js'
import Header from './components/views/Header/Header.js'
import { Container } from 'react-bootstrap'
import Movies from './components/pages/Movies/Movies.js'
import Sport from './components/pages/Sport/Sport.js'
import Category from './components/pages/Category/Category.js'

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryTitle" element={<Category />} />
          {/* <Route path="/categories/Movies" element={<Movies />} />
          <Route path="/categories/Sport" element={<Sport />} /> */}
          <Route path="/post/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/edit/:postId" element={<Edit />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};


export default App;