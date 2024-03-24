import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {Movies} from "../MoviesContainer/Movies";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const GenreLists = () => {
    const {id: with_genres} = useParams<string>()
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {movie} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch();


    useEffect(() => {
        with_genres
            ?
        dispatch(movieActions.getMovieByGenre({page, with_genres}))
    :
        dispatch(movieActions.getAll({page}))
    }, [page, with_genres,dispatch]);


    return (
        <div>
            <Movies page={page} movies={movie} setQuery={setQuery}/>
        </div>
    );
};

export {GenreLists};
