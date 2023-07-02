import { NavLink } from 'react-router-dom';
import s from './Sections.module.scss'

const Sections = () => {

    const activeLink =  s.active;
    const normalLink = s.link;

    return (
        <div className={s.sections}>
            <ul className={s.choice}>
                <NavLink to='/twits' className={({isActive}) => isActive ? activeLink : normalLink}>Твиты</NavLink>
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Ответы</NavLink>
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Подборки</NavLink>
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Медиа</NavLink>
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Нравится</NavLink>
            </ul>
        </div>
    );
}
 
export default Sections;