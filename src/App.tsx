import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/nav/NavBar'
import useAxios from './hooks/useAxios'
import Card from './components/card/Card';

function App() {
  const { data, error, httpConfig } = useAxios();

  useEffect(() => {
    httpConfig();
  }, [])

  return (
    <>
      <NavBar />
      <div className='flex flex-wrap justify-center h-full  w-full bg-gray-600'>
        {data ? data.results.map((element) => (
          
          <Card 
            rate={element.vote_average} 
            image={'https://image.tmdb.org/t/p/w500'+element.poster_path} 
            title={element.title} 
            key={element.id} 
            id={element.id}
          />
        )) : <p>non existe</p>}
      </div>
    </>
  )
}

export default App
