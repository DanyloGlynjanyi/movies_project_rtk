import {axiosServise, IRes} from "./axiosServise";
import {urls} from "../constans";
import {IData, IGenreList} from "../interfaces";

const genresServise={
    getAll:():IRes<IGenreList>=>axiosServise.get(urls.genre),
    getByIdMovie:(page:string, with_genres:string):IRes<IData>=>axiosServise.get(urls.movies, {params:{page, with_genres}})
}
export {genresServise}


