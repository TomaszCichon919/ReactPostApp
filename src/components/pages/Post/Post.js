import styles from './Post.module.scss';
//import { useSelector } from 'react-redux';
// import { getColumnsByList, getListById } from '../../redux/listsRedux'
// import { useParams } from 'react-router';
//import { Navigate } from 'react-router-dom';


const Post = () => {
 // const { postId } = useParams();
    
  //const posts = useSelector(state => getColumnsByList(state, listId));

  //const listData = useSelector(state => getListById(state, listId));

  //if(!listData) return <Navigate to="/" />

	return (
    
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>post title</h2>
      </header>
      <p className={styles.description}>post</p>
    
      {/* <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm listId={listId} /> */}
    </div>
  );
};

export default Post;