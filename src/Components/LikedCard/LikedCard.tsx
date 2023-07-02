import s from './LikedCard.module.scss'

const LikedCard = ({post}) => {
    return (
        <div className={s.liked}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}
 
export default LikedCard;