import styles from './Edit.module.scss';
import EditPostForm from '../../features/EditPostForm/EditPostForm'


const Edit = () => {
  return (
         
      <div className={styles.container}>
      <h1>Edit Your post</h1>
      <EditPostForm/>
        </div>
            )
}

export default Edit;