import {useSearchParams} from "react-router-dom";
import React, {FC, useEffect} from "react";



import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";
import {Movies} from "../../MoviesContainer";


interface IProps {
    word: string
}

const SearchContainer: FC<IProps> = ({word}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {movie} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        word
            ?
            dispatch(movieActions.getBySearch({word, page}))
            :
            dispatch(movieActions.getAll({page}))

    }, [word, page, dispatch]);

    return (
        <div>
            <Movies page={page} movies={movie} setQuery={setQuery}/>
        </div>
    );
};

export {SearchContainer};