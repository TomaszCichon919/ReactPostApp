import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/store';
import { useSelector } from 'react-redux';

const Categories = () => {

    const categories = useSelector(getAllCategories);
    return (
       
       <div className={styles.container}>
      <h1>Categories</h1>
      {categories.map(categorie => (
       <Link to={"/categories/" + categorie.title}>
       <p>{categorie.title}</p>
   </Link>
      ))}
        </div>
            )
}

export default Categories;