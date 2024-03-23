import axios, {AxiosResponse} from "axios";
import {baseURL, token} from "../constans";

export type IRes<T> = Promise<AxiosResponse<T>>

const axiosService=axios.create({baseURL})

axiosService.interceptors.request.use(request=>
{request.headers.Authorization = `Bearer ${token}`
return request
})

export {axiosService}