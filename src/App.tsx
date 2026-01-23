import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/nav/NavBar'
import useAxios from './hooks/useAxios'
import Card from './components/card/Card';

function App() {
  const { data, error, httpConfig } = useAxios();
  const [dados, setDados] = useState<any>();


  useEffect(() => {
    httpConfig();
  }, [])


  return (
    <>
      <NavBar />
      <div className='flex flex-wrap justify-center h-full  w-full'>
        {console.log(data.results[0].vote_average)}
        {data ? data.results.map((element) => (
          <Card rate={element.vote_average} title={element.title} key={element.id} />
        )) : <p>non existe</p>}
      </div>
    </>
  )
}

export default App
