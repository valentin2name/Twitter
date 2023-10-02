import s from './TwitCard.module.scss'
import icon from './../../assets/Image/HeaderIcons/twitProf.jpg'
import com from './../../assets/Image/TwitsIcons/comment.png'
import retwit from './../../assets/Image/TwitsIcons/repeat.png'
import likeNone from './../../assets/Image/TwitsIcons/like.png'
import likeD from './../../assets/Image/TwitsIcons/doneLike.png'
import basket from './../../assets/Image/TwitsIcons/trash.png'
import repost from './../../assets/Image/TwitsIcons/upload.png'
import { useState } from 'react'

const TwitCard = ({item, findTwit}: any) => {


    
    const [like, setLike] = useState(false)

    const toggleLike = () => {
        setLike(prev => !prev)
    }
    
    return (
        <div className={s.wrapp}>
                <div className={s.dop}>
                    <div><img className={s.ava} src={icon} alt="AVA"/></div>
                    <div className={s.person}>
                        <div className={s.complex}>
                            <h2>{item.user}</h2>
                            <p>{item.email}</p>
                            <p>{item.data}</p>
                        </div>
                        <div>
                            <p className={s.message}>{item.text}</p>
                            <div className={s.actions}>
                                <button className={s.touch}><img className={s.picture} src={com} alt="" /></button>
                                <button className={s.touch}><img className={s.picture} src={retwit} alt="" /></button>
                                <button onClick={toggleLike} className={s.touch}><img className={s.picture} src={like ? likeD : likeNone} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.btns}>
                    <a href="#!"><img onClick={() => findTwit(item.id)} className={s.picture} src={basket} alt="Удалить" /></a>
                    <img className={s.picture} src={repost} alt="Поделиться" />
                </div>
            </div>
    );
}
 
export default TwitCard;