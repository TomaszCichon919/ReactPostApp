import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };
    
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
        {actionText}
      </Button>
    </Form>
            );
}

 
export default PostForm;