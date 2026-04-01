import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loadingValue)
  }

  const fetchData = async () => {
    
    consoleLoader(true)

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      setError(err as string)
    } finally {
      consoleLoader(false)
    }
  }

  //comunicarnos con un endpoint -  ebtidad externa al componente
  // operaciones asincronas
  // parametros de entrada

  // sync con entidades externas--
  useEffect(() =>{
    // 1 - cuando se monta el componente
    // 2 - cada vez que se modifique un valor del state

    fetchData()
    
    // manejar el estado de la memoria
    // return () => { }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    return <div>Ups! Something went wrong.</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
