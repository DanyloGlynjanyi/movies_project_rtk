import {axiosService, IRes} from "./axiosService";

import {urls} from "../constans";
import {IData} from "../interfaces";

const movieService={
    getAll:(page:string|number):IRes<IData> => axiosService.get(urls.movies, {params:{page}})
}

export {
    movieService
}