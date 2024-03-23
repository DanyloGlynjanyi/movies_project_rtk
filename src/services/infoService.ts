import {axiosService, IRes} from "./axiosService";

import {IInfo} from "../interfaces";
import {urls} from "../constans";

const infoService={
    getById:(id:string):IRes<IInfo> => axiosService.get(urls.info.byId(id))
}

export {
    infoService
}