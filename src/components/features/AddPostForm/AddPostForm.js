import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  addPost } from '../../../redux/postsRedux'
import { useNavigate } from 'react-router-dom';

function AddPostForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost( {title: title, shortDescription: shortDescription, content: content, publishedDate: publishedDate, author: author} ));
        setTitle('');
        setShortDescription('');
        setPublishedDate('');
        setAuthor('');
        setContent('');
        navigate('/');
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Post Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="published">
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Short description</Form.Label>
        <Form.Control  as="textarea" type="text" placeholder="Short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={5} type="text" placeholder="Main content here" value={content} onChange={e => setContent(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddPostForm;





