import React, {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";

import css from './Movies.module.css'
import {Pagination} from "@mui/material";

interface IProps{
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {
    console.log(movies);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery(prev => {
            prev.set('page', `${value}`);
            return prev;
        });
    };

    return (
        <div>
            <div className={css.Wrap}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Movies_button_div}>
                <Pagination
                    count={500}
                    page={parseInt(page)}
                    shape="rounded"
                    onChange={handleChange}
                />

            </div>
        </div>
    );
};

export {Movies};