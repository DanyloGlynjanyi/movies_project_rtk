import axios, {AxiosResponse} from "axios";
import {baseURL, token} from "../constans";

export type IRes<T> = Promise<AxiosResponse<T>>

const axiosServise=axios.create({baseURL})

axiosServise.interceptors.request.use(request=>
{request.headers.Authorization = `Bearer ${token}`
return request
})

export {axiosServise}