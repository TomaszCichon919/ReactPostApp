import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/store';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

const Categories = () => {

    const categories = useSelector(getAllCategories);
    return (
       
       <Container>
      <h1>Categories</h1>
      <Stack gap={1}>
      {categories.map(category => (
        <div className="p-2 bg-light border border-secondary rounded">
       <Link key={category.id} to={"/categories/" + category.title}>
       <p className="px-2">{category.title}</p>
   </Link>
   </div>
      ))}
       </Stack>
        </Container>
            )
}

export default Categories;