import './App.css'
import { Button, ColorRed, AppForm } from './components'
import { GlobalProvider } from './context/global.provider'

function App() {

  const submit = () => {
    console.log('submit')
  }

  const handleClick = () => {
    console.log('uy me clickio todo!')
  }

  const dimeHola = () => {
    alert('Hola !')
  }
  
  return(
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>My boton rojo</Button></ColorRed>
      <Button parentMethod={handleClick}>My boton normal</Button>
      <AppForm>
        <button type='submit' onClick={submit}>Submit</button>
      </AppForm>
    </GlobalProvider>
  )
}

export default App

