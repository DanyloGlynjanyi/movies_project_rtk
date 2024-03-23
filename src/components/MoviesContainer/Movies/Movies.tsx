import React, {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";
import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import css from './Movies.module.css'
import {Pagination} from "@mui/material";

interface IProps {
    movies: IMovie[],
    page:string,
    setQuery: SetURLSearchParams
}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set('page', `${value}`);
            return newParams;
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
                    page={page}
                    shape="rounded"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export {Movies};
