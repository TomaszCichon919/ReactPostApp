import styles from './Post.module.scss';
import { useSelector } from 'react-redux';
import { getPostsById, removePost } from '../../../redux/postsRedux'
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DateToString from '../../../utils/DateToString/DateToString.js';


const Post = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const { postId } = useParams();

  const post = useSelector(state => getPostsById(state, postId));


  const dispatch = useDispatch();


  const handleDelete = () => {
    setShow(false)
    const string = postId.toString()
    dispatch(removePost(string));
  }

  if (!post) return <Navigate to="/" />




  return (

    <section className='px-5'>
      <div className='d-flex justify-content-between'>
        <div>
          <h3 className='py-4'>{post.title}</h3>
        </div>
        <div>
          <Link to={'/post/edit/' + postId} >
            <Button variant="outline-info" className='mx-2'>Edit</Button>
          </Link>
          <Button variant="outline-danger" className='mx-2' onClick={handleShow}>Delete</Button>
        </div>
      </div>
      <p><span className={styles.caption}>Author:</span>{post.author}</p>
      <p><span className={styles.caption}>Published:</span>{DateToString(post.publishedDate)}</p>
      <p><span className={styles.caption}>Category:</span>{post.category}</p>
      <p className='pt-4'dangerouslySetInnerHTML={{ __html: post.content }}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>The opreation will completly remove the post. The opration can not be reversed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Post;