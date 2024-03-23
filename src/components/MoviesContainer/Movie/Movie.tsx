import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";

import css from './Movie.module.css'
import {useAppSelector} from "../../../hooks";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {original_title, poster_path, id, vote_average} = movie;
    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.theme)

    const nav = () => {
        navigate(`/info/${id}`)
    }

    return (
        <div className={css.Movie} onClick={nav}>
            <div> {poster_path ?
                <img className={css.img_poster} src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                     alt={original_title} style={{width: '150'}}/> :
                <img className={css.img_poster}
                     src={'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
                     alt="not found" style={{width: '150'}}/>
            }
            </div>
            <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10}
                    size="small" readOnly/>

            <p className={theme ? css.light : css.dark}>{original_title}</p>

        </div>
    );
};

export {Movie};


