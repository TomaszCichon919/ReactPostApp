import { useDispatch } from 'react-redux';
import {  editPost } from '../../../redux/postsRedux'
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm'
import {  getPostsById } from '../../../redux/postsRedux'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



    const EditPostForm = () => {
        const { postId } = useParams();
        console.log('post',postId);
      
        const post = useSelector(state => getPostsById(state, postId));
        console.log('postData', post)
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const handleSubmit = post => {
          dispatch(editPost({...post, id:postId}));
          navigate('/')
        };
        if(!post) return <Navigate to="/" />
        return (
          <PostForm action={handleSubmit} actionText="Edit post" title={post.title} author={post.author} 
          shortDescription={post.shortDescription} publishedDate={post.publishedDate} content={post.content}/>
        )
      };
      
      export default EditPostForm;
