import s from './AnswerCard.module.scss'
import icon from './../../assets/Image/userAns.png'
import com from './../../assets/Image/TwitsIcons/comment.png'
import retwit from './../../assets/Image/TwitsIcons/repeat.png'
import likeNone from './../../assets/Image/TwitsIcons/like.png'
import like from './../../assets/Image/TwitsIcons/doneLike.png'
import basket from './../../assets/Image/TwitsIcons/trash.png'
import repost from './../../assets/Image/TwitsIcons/upload.png'

const AnswerCard = ({item}: any) => {
    return (
        <div className={s.answer}>
            <div className={s.wrapp}>
            <div className={s.post}>
                    <div>
                        <img className={s.ava} src={icon} alt="AVA" />
                    </div>
                    <div className={s.from}>
                            <div className={s.block}>
                                <h3>{item.name}</h3>
                                <p>{item.email}</p>
                            </div>
                            <p>{item.body}</p>
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
            </div>
        </div>
    );
}
 
export default AnswerCard;