import { useState } from 'react'
import './App.css'
import NavBar from './components/nav/NavBar'

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_TMDB_TOK;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create();

const test = () => {
    instance.get('/3/movie/popular?language=pt-BR', {
        timeout: 5000
    }).then(function (response) {
        // manipula a resposta da requisição
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    })
};



function App() {
  test();
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>

      {/* <Card/> */}
    </>
  )
}

export default App
