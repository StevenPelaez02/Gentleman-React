// Objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente
// SIN causar un re-render
// Objetivo 2: hacer referencia a un elemento del DOM

import { useRef, useState } from "react"

// Ejemplo:
//  - un marcador de un libro que utilizamos para guardar la ultima posision de la lectura
//  NO modifica el contenido del libro


export const BookReader = () => {

  const currentPageRef = useRef<number>(1)
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    currentPageRef.current += 1
    setCurrentPage(currentPageRef.current)
    console.log(`Avanzaste a la pagina ${currentPageRef.current}`);
  }

  const previousPage = () => {
    
    if( currentPageRef.current === 1){
      console.log(`No se puede retroceder la pagina porque ya te encuentras en ${currentPageRef.current}`);
      return
    }

    currentPageRef.current -= 1
    setCurrentPage(currentPageRef.current)
    console.log(`Volviste a la pagina ${currentPageRef.current}`);
  }

  const goToPage = (page : number) => {

    if(currentPageRef.current < 1){
      console.log(`No se puede saltrar a un valor imposible`);
      return
    }

    currentPageRef.current = page
    setCurrentPage(page)
    console.log(`Saltaste a la pagina ${currentPageRef.current}`);
  }

  return(
    <div>
      <h2>Lectura de libro</h2>
      <p>Pagina actual: {currentPageRef.current}</p>
      <p>Pagina actual [ State ]: {currentPage}</p>
      <button onClick={previousPage}>Pagina Anterior</button>
      <button onClick={nextPage}>Pagina Siguiente</button>
      <button onClick={() => { goToPage(50) }}>Ir a la pagina 50</button>
    </div> 
  )
}

