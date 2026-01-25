import axios from 'axios';
import { useState } from 'react';
import type { ITMDBPopularResponse } from '../Interface/ITMDBPopularResponse';
import type { ITMDBMovieResponse } from '../Interface/ITMDBMovieResponse';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create();

interface parms {
    method: string,
    movie: string,
    endPointURL: string
}


const useAxios = <T,>() => {
    const [type, setType] = useState<String>();
    const [data, setData] = useState<T>();
    const [code, setCode] = useState<number>(0);
    const [error, setError] = useState<string>('');


    const httpConfig = (method: string, endPointURL: string) => {
        if (method) setType(method);

        // if (type == 'GET') {
            console.log(endPointURL)
            instance.get(endPointURL, {
                timeout: 5000
            }).then(function (response) {
                console.log(response)
                setData(response.data);
            }).catch(function (error) {
                setError(error);
            })
        // }
    }

    return { data, code, httpConfig, error};
};

export default useAxios;