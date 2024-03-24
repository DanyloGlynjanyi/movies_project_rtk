import {axiosServise, IRes} from "./axiosServise";

import {IInfo} from "../interfaces";
import {urls} from "../constans";

const infoServise={
    getById:(id:string):IRes<IInfo> => axiosServise.get(urls.info.byId(id))
}

export {
    infoServise
}