import s from './MediaCard.module.scss'

const MediaCard = ({image}) => {
    return (
        <div className={s.media}>
            <img src={image.url} alt="" />
        </div>
    );
}
 
export default MediaCard;