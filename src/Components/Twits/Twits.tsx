import s from './Twits.module.scss'
import NewPost from '../NewPost/NewPost'
import TwitCard from '../TwitCard/TwitCard'
import { useDispatch, useSelector } from 'react-redux'
import { delPostAction } from '../Reducer/Reducer'


const Twits = () => {

    const posts = useSelector((state: any) => state.posts.posts)
    const dispatch = useDispatch()
    

    const findTwit = (id: number) => {
        // setPost(prev => prev.filter(item => text !== item.text))
        dispatch(delPostAction(id))
    }


    return (
        <div className={s.twits}>
            <NewPost />
            {posts.length ? posts.map((item: any) => {
                return <TwitCard key={item.text} item={item} findTwit={findTwit}/>
            }) : <p className={s.nothing}>Здесь пока нет мыслей</p>}
        </div>
    );
}
 
export default Twits;