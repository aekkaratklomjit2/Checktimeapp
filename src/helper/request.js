import BaseUrl from '../config/BaseUrl.json'
import * as axios from 'axios';
export const post=(route,body={},withAuth=true) => {
    const headers={
    headers:{
    }
    }
    return axios.post(BaseUrl.BaseUrl+route,body)
}
export const get=(route,body={}) => {
    return axios.post(BaseUrl.BaseUrl,Headers)
}