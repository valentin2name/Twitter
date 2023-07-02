import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCard from '../MediaCard/MediaCard';

const Media = () => {

    const [images, setImages] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
        const data = await axios.get(url)
        setImages(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {images.map((image) => {
                return <MediaCard image={image}/>
            })}
        </div>
    );
}
 
export default Media;