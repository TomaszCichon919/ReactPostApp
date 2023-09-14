import styles from './Add.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm'

const Add = () => {
    return (
       
       <div className={styles.container}>
      <h1>Add Your post</h1>
      <AddPostForm/>
        </div>
            )
}

export default Add;