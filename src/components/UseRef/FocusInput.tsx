import { useRef } from "react"

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleButtonClck = () => {
    if ( !inputRef.current ) {
      console.log(`No existe la referencia al elemento`);
      return
    }

    inputRef.current.focus()
  }

  return(
    <div>
      <input type="text" ref={inputRef} placeholder="Escribe algo aqui" />
      <button onClick={handleButtonClck}>Enfocar en el Inputs</button>
    </div>
  )
}