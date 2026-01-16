import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create();
interface parms {
    method: string,
    movie: string,
    endPointURL?: string
}

interface IMDBResponse {

}

const useAxios = () => {
    const [type, setType] = useState<String>();
    const [data, setData] = useState<any>();
    const [code, setCode] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const [endPoint,setEndPoint] = useState<string>('/3/movie/popular?language=pt-BR')

    
    const httpConfig = (method?:string, endPointURL?:string) => {
        if(endPointURL) setEndPoint(endPointURL);
        if(method) setType(method);

        if (type == method) {
            instance.get(endPoint, {
                timeout: 5000
            }).then(function (response) {
                console.log(response)
                setData(response);
                console.log(data)
            }).catch(function (error) {
               setError(error);
            })
        }
    }

    return { data, code, httpConfig, error };
};

export default useAxios;