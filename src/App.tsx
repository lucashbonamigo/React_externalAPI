import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/nav/NavBar'
import useAxios from './hooks/useAxios'
import Card from './components/card/Card';



function App() {
  const { data, error, httpConfig } = useAxios();
  const [count, setCount] = useState(0)
  const [dados, setDados] = useState<any>();

  useEffect(() => {
    httpConfig();
    setDados(data[0]);
  }, [])


  return (
    <>
      <NavBar />

      {console.log(dados)}
      {data && data[0].data.results.map((element: any) => {

        <Card image='aaaaaaaa' title='aaaaa' rate={9} />
      })}
    </>
  )
}

export default App
