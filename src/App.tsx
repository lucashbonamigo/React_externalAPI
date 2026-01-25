import { useEffect, useState } from 'react'
import './App.css'
import useAxios from './hooks/useAxios'
import Card from './components/card/Card';
import Pagination from './components/pagination/pagination';
import type { ITMDBPopularResponse } from './Interface/ITMDBPopularResponse';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesList } from './redux/actions';

function App() {
  const { data: apiResult, error, httpConfig } = useAxios<ITMDBPopularResponse>();
  const [page, setPage] = useState<Number>(1);
  const reduxData = useSelector((state: any) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    httpConfig('GET', `/3/movie/popular?language=pt-BR&page=${page}`);
  }, [page]);

  useEffect(() => {
    if (apiResult) {
      dispatch(setMoviesList(apiResult));
    }
  }, [apiResult, dispatch]);

  return (
    <div className='bg-gray-600'>
      <div className='flex flex-wrap justify-center h-full  w-full'>
        {reduxData && reduxData.results && reduxData ? reduxData.results.map((element:any) => (
          <Card
            rate={element.vote_average}
            image={'https://image.tmdb.org/t/p/w500' + element.poster_path}
            title={element.title}
            key={element.id}
            id={element.id}
          />
        )) : <p className="text-white h-10 p-10">Carregando ou nenhum filme encontrado...</p>}
      </div>
      <Pagination currentPage={reduxData?.page || 1} setPage={setPage} />
    </div>
  )
}

export default App
