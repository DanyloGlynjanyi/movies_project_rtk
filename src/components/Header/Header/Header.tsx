import {NavLink} from "react-router-dom";




import css from './Header.module.css'
import {ThemeSwitcher} from "../ThemeSwitcher";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>TMDB</NavLink>
            <div>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres/:id'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>

            <ThemeSwitcher/>
            <div ><img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user" className={css.Image}/></div>


        </div>
    );
};

export {Header};