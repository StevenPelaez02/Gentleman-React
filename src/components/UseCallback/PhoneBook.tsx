// Objetivo: se utiliza para memorizar una instancia de una funcion
// hace que un hijo no reenderize

import { useCallback, useState, memo } from "react";

// Ejemplo: 
// Supongamos que tenes un numero de telefono al que llamas con frecuencia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
// A menos que el numero cambie siempre utilizo el mismo contacto.

interface Contact {
  id: number,
  name: string,
  phone: string
}

interface ContactProps {
  contact: Contact,
  onCall: (phone: string) => void
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando contacto ${contact.name}`);


  return(
    <div>
      <h3>{contact.name}</h3>
      <p>Telefono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  )
})

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1, name: 'manzana', phone: '123-456-789'
    },
    {
      id: 2, name: 'pera', phone: '123-456-789'
    },
    {
      id: 3, name: 'leche', phone: '123-456-789'
    }
  ])

  const [log, setLog] = useState<string>('')

  const makeCall = useCallback((name:string) => setLog(`Llamando a ${name}`), [])

  const addContact = () => {
    const newContact = {
      id: contacts.length+1,
      name: `Contacto ${contacts.length+1}`,
      phone: `${Math.floor(10000000000) + Math.random() * 90000000000}`
    }

    setContacts([...contacts, newContact])
  }

  
  return(
    <div>
      <h2>Agenda de Contacto</h2>
      {contacts.map(contac => (
        <ContactCard key={contac.id} contact={contac} onCall={makeCall}></ContactCard>
      ))}
      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </div>
  )
}