import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {InfoMovieDat} from "../InfoMovieDat";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";

const Info = () => {
    const {id} = useParams<string>()
    const dispatch = useAppDispatch();
    const {info} = useAppSelector(state => state.movie)
    useEffect(() => {
        dispatch(movieActions.getMovieInfo({id}))

    }, [id,dispatch]);
    return (

        <div>
            {info && <InfoMovieDat key={id} info={info}/>}
        </div>
    );
};

export {Info};