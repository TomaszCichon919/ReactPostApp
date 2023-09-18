import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormControl } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../../redux/store';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [category, setCategory] = useState(props.category || '');
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const categories = useSelector(getAllCategories);


    const handleChange = (content) => {
      setContent(content);
    };
    const handleDateChange = (date) => {
      setPublishedDate(date);
    };

    const handleSelectChange = (e) => {
      setCategory(e.target.value);
    };
    const handleSubmit = () => {
      setContentError(!content)
      setDateError(!publishedDate)
      if(content && publishedDate) {
        action({ title, author, publishedDate, shortDescription, content, category });
      };

    };
    
      return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3" controlId="title">
        <Form.Label>Post Title</Form.Label>
        <Form.Control {...register("title", { required: true, minLength: 3 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control {...register("author", { required: true, minLength: 3 })} type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="published">
        <Form.Label className="pb-2">Published</Form.Label>
        <div>
        <DatePicker selected={publishedDate}  dateFormat="dd/MM/yyyy" onChange={handleDateChange} />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example"  value={category}
        onChange={handleSelectChange}>
        <option>Open this select menu</option>
        {categories.map(category => (
      <option key={category.id} value={category.title}>{category.title}</option>
      ))}
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Short description</Form.Label>
        <Form.Control  {...register("shortDescription", { required: true, minLength: 20 })} as="textarea" type="text" placeholder="Short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
        {errors.title && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
     </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
    
        <ReactQuill theme="snow" value={content}   onChange={handleChange} />;
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}   
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
            );
}

 
export default PostForm;