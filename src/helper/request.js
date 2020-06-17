import BaseUrl from '../config/BaseUrl.json'
import {AsyncStorage} from 'react-native'
import * as axios from 'axios';
export const get = async(route) => {
     const access_Token = await AsyncStorage.getItem('access_Token')
     const headers = {
        headers:{
            Authorization : access_Token
         }
     }
    return axios.get(BaseUrl.BaseUrl+route,headers)
}
export const post=(route,data={}) => {
    return axios.post(BaseUrl.BaseUrl+route,data)
}


