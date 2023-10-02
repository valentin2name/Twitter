import axios from 'axios';
import { useEffect, useState } from 'react';
import LikedCard from '../LikedCard/LikedCard';

const Liked = () => {

    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const data = await axios.get(url)
        setPosts(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {posts.map((post) => {
                return <LikedCard post={post}/>
            })}
        </div>
    );
}
 
export default Liked;