import s from './ForYou.module.scss'

const ForYou = () => {
    return (
        <div className={s.for}>
            <div className={s.wrapp}>
                <h1>Только для подлинных<br /> учетных записей</h1>
                <p>You must be verified to highlight posts on your profile.</p>
                <button className={s.btn}>Подтвердить подлинность</button>
            </div>
        </div>
    );
}
 
export default ForYou;