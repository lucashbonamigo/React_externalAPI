import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create();


const useAxios = <T,>() => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>();


    const httpConfig = (endPointURL: string) => {
        setLoading(true)

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
        setLoading(false);
    }

    return { data, httpConfig, error, loading };
};

export default useAxios;