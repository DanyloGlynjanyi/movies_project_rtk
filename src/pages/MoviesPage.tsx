import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";



import {IMovie} from "../interfaces";
import {Movies} from "../components";
import {movieService} from "../services";


const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');




    useEffect(() => {

        movieService.getAll(page).then(({data:{results}}) => setMovies(results));
    }, [page]);

   
    // @ts-ignore
    return (
        <div>
            <Movies page={page} movies={movies} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesPage};