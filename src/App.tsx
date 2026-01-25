import { useEffect, useState } from 'react'
import './App.css'
import useAxios from './hooks/useAxios'
import Card from './components/card/Card';
import Pagination from './components/pagination/pagination';

function App() {
  const { data, error, httpConfig } = useAxios();
  const [page, setPage] = useState<Number>(1);

  useEffect(() => {
    httpConfig('GET', '/3/movie/popular?page=2?language=pt-BR?');
  }, [])

  return (
    <div className='bg-gray-600'>
      <Pagination data={data} />
      <div className='flex flex-wrap justify-center h-full  w-full'>
        {data ? data.results.map((element) => (

          <Card
            rate={element.vote_average}
            image={'https://image.tmdb.org/t/p/w500' + element.poster_path}
            title={element.title}
            key={element.id}
            id={element.id}
          />
        )) : <p>non existe</p>}
      </div>
      <Pagination data={data} />
    </div>
  )
}

export default App
