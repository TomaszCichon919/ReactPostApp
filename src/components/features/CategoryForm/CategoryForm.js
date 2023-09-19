import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { addCategory } from '../../../redux/categoriesRedux';

const CategoryForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const handleSubmit = () => {

        dispatch(addCategory({title}));
        setTitle('');
};

	return (
        <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" controlId="title">
    <Form.Label className='py-2'>Category Title</Form.Label>
    <Form.Control {...register("title", { required: true, minLength: 3 })} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
    {errors.title && <small className="d-block form-text text-danger mt-2">Category is too short (min is 3)</small>}
  </Form.Group>
  <Button variant="primary" type="submit">
        Add Category
      </Button>
    </Form>





        // <form onSubmit={handleSubmit} className={styles.listForm}>
        //     <span className={styles.textField}>Title:</span>
        //      <TextInput placeholder="title..." value={title} onChange={e => setTitle(e.target.value)}>
        //      </TextInput>
        //      <span className={styles.textField}>description</span>
        //      <TextInput placeholder="description..." value={description} onChange={e => setDescription(e.target.value)}>
        //      </TextInput>
        //     <Button>Add Category</Button>
        // </form>
	);
};

export default CategoryForm;