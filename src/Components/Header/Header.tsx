import s from './Header.module.scss'
import tHead from './../../assets/Image/HeaderIcons/twitHed.jpg'
import tProf from './../../assets/Image/HeaderIcons/twitProf.jpg'
import calen from './../../assets/Image/HeaderIcons/calendar.png'
import cap from './../../assets/Image/HeaderIcons/Shapka.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.phone} src={cap} alt="" />
            <div className={s.wrapp}>
                <div className={s.info}>
                    <img className={s.ava} src={tProf} alt="PHOTO" />
                    <button>Изменить</button>
                </div>

                <div>
                    <h1 className={s.name}>Валёк.</h1>
                    <p>@enfotorch</p>
                </div>

                <div className={s.year}>
                    <img className={s.picture} src={calen} alt="IMG" />
                    <p>Дата регистрации: октябрь 2018г.</p>
                </div>

                <div className={s.follow}>
                    <p><span>14</span> Читаемые</p>
                    <p><span>3</span> Читатели</p>
                </div>
            </div>
        </div>
    );
}
 
export default Header;