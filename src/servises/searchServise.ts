import {axiosServise, IRes} from "./axiosServise";

import {IData} from "../interfaces";
import {urls} from "../constans";

const searchServise={
    getBySearch:(query:string, page:string):IRes<IData>=>axiosServise.get(urls.search, {params:{query, page}})
}
export {searchServise}