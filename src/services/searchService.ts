import {axiosService, IRes} from "./axiosService";

import {IData} from "../interfaces";
import {urls} from "../constans";

const searchService={
    getBySearch:(query:string, page:number|string):IRes<IData>=>axiosService.get(urls.search, {params:{query, page}})
}
export {searchService}