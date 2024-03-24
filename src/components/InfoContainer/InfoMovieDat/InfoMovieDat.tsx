import {IInfo} from "../../../interfaces";
import {FC} from "react";

import {Box, Rating, Badge} from "@mui/material";
import css from './InfoMovieDat.module.css'
import {NavLink} from "react-router-dom";


interface IProps {
    info: IInfo
}

const InfoMovieDat: FC<IProps> = ({info}) => {
    const {title, poster_path, overview, genres, release_date, vote_average, original_title, runtime,} = info
    return (
        <div className={css.wrap}>
            <div className={css.title}>{title}</div>
            <div className={css.title}>({original_title})</div>
            <div className={css.block}>
                <div className={css.miniBlock}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
                <div className={css.miniBlock}>
                    <p>rating</p>
                    <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1}
                            max={10}
                            size="large" readOnly/>
                    <p>genres</p>
                    <Box sx={{color: 'action.active'}}>
                        <Badge color="secondary" variant="dot">
                            <div className={css.text}>{genres.map((genre, index) =>
                                <NavLink to={`/genres/${genre.id}`} className={css.link}
                                         key={genre.id}> {genre.name}  </NavLink>)}
                            </div>
                        </Badge>
                    </Box>
                    <p>runtime</p>
                    <div className={css.text}>{runtime} min</div>
                    <p>release date</p>
                    <div className={css.text}>{release_date}</div>
                </div>
            </div>
            <p>overview</p>
            <div className={css.text}>{overview}</div>
        </div>
    );
};

export {InfoMovieDat};