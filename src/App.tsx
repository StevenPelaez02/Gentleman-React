import './App.css'
import { Button, ColorRed, AppForm } from './components'


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
    <>
      <ColorRed><Button parentMethod={dimeHola}>My boton rojo</Button></ColorRed>
      <Button parentMethod={handleClick}>My boton normal</Button>
      <AppForm>
        <button type='submit' onClick={submit}></button>
      </AppForm>
    </>
  )
}

export default App
