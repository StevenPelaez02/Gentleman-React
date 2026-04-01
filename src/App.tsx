import { useFetch } from './hooks'
import './App.css'

const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
// userURL
// const userURL = 'https://pokeapi.co/api/v2/pokemon/ditto'


interface Data{
  name: string,
  lastname: string,
  age: number
}

function App() {
   //
  const { data, loading, error } = useFetch<Data>(url)
  // const { data: dataUser, error: errorUser, loading: loadingUser } = useFetch<{name: string}>(userURL)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  return(
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
