import Posts from '../../features/Posts/Posts';
import Button from 'react-bootstrap/Button';


const Main = () => {
    return (

        <div>
            <div className='d-flex justify-content-between'>
                <div className='pb-3'>
                    <h1>All Posts</h1>
                </div>
                <div>
                    <Button variant="outline-info">Add Post</Button>
                </div>
            </div>

            <Posts />
        </div>
    )
}

export default Main;