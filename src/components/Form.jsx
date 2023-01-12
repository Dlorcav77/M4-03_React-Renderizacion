import { useState } from 'react'

const Form = ({onSubmit}) => {

    const [name, setName]       = useState("");
    const [email, setEmail]     = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newWorjers = {
          id: Date.now(),
          nombre: name,
          correo: email,
        };
    
        onSubmit(newWorjers)
        
        setName("");
        setEmail("");
      }

    return(
        <form onSubmit={handleSubmit} className="ms-3">
          <h4 className='mt-5'>Nombre del colaborador</h4>
          <input onChange={(e) => setName(e.target.value)} type="text" className='w-50' placeholder="Ingresa el nombre del colaborador" value={name} required/>
          <h4 className='mt-3'>Correo del colaborador</h4>
          <input onChange={(e) => setEmail(e.target.value)}type="email" className='w-50' placeholder="Ingresa correo del colaborador" value={email} required/>
          <button type='submit' className='d-flex btn btn-primary w-25 mt-4'>Agregar colaborador</button>
        </form>        
    )
}

export default Form;