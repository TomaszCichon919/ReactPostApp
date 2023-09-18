import styles from './Category.module.scss';
import { useSelector } from 'react-redux';
import { getCategoryByTitle } from '../../../redux/categoriesRedux';
import { useParams } from 'react-router';
import {getPostByCategory} from '../../../redux/postsRedux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DateToString from '../../../utils/DateToString/DateToString.js';

const Category = () => {



  const { categoryTitle } = useParams();
    
const selectedPosts = useSelector(state => getPostByCategory(state, categoryTitle));

  const selectedCategory = useSelector(state => getCategoryByTitle(state, categoryTitle));


    return (
       
       <div>
      <h1>{selectedCategory.title}</h1>
      {!selectedPosts.length && <p className="d-block form-text mt-2">No posts found in this category...</p>}   
      <Container className='mb-4'>
      <Row>
      {selectedPosts.map(post => (
        <Col key={post.id} xs={12} md={3} className={styles.wrapper}>
          <h3 className='pt-2'>{post.title}</h3>
          <p><span className={styles.caption}>Author:</span>{post.author}</p>
          <p><span className={styles.caption}>Published:</span>{DateToString(post.publishedDate)}</p>
          <p><span className={styles.caption}>Category:</span>{post.category}</p>
          <p>{post.shortDescription}</p>
          <Link key={post.id} to={'/post/' + post.id}><Button className='mb-3' variant="primary">Read More</Button></Link>
          </Col>
      ))}
      </Row>
      </Container>
        </div>
            )
}

export default Category;