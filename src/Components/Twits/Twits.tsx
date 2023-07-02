import s from './Twits.module.scss'
import icon from './../../assets/Image/HeaderIcons/twitProf.jpg'
import com from './../../assets/Image/TwitsIcons/comment.png'
import retwit from './../../assets/Image/TwitsIcons/repeat.png'
import likeNone from './../../assets/Image/TwitsIcons/like.png'
import like from './../../assets/Image/TwitsIcons/doneLike.png'
import basket from './../../assets/Image/TwitsIcons/trash.png'
import repost from './../../assets/Image/TwitsIcons/upload.png'
import Posts from './Posts'

const Twits = () => {
    return (
        <div className={s.twits}>
            <div className={s.wrapp}>
                {Posts.map((post) => {
                    return <div className={s.post}>
                    <div>
                        <img className={s.ava} src={icon} alt="AVA" />
                    </div>
                    <div className={s.from}>
                            <div className={s.block}>
                                <h3>{post.user}</h3>
                                <p>{post.email}</p>
                                <p>{post.data}</p>
                            </div>
                            <p>{post.text}</p>
                            <div className={s.actions}>
                                <img className={s.picture} src={com} alt="Комент" />
                                <img className={s.picture} src={retwit} alt="Ретвит" />
                                <img className={s.picture} src={likeNone} alt="Лайк" />
                            </div>
                    </div>

                    <div className={s.btns}>
                        <img className={s.picture} src={basket} alt="Удалить" />
                        <img className={s.picture} src={repost} alt="Поделиться" />
                    </div>
                </div>
                })}
            </div>
        </div>
    );
}
 
export default Twits;