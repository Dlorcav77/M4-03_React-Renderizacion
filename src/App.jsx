import {BaseColaboradores} from './assets/db'
import { useState } from 'react'
import Form from './components/Form'
import Item from './components/Item'

const App = () => {
  const [workers, setWorkers] = useState(BaseColaboradores);
  const [search, setSearch]   = useState('');

  const onSubmit = (newWorjers) => {
    setWorkers([...workers, newWorjers])
  }
    return (
      <>
        <div id='container' className='bg-dark p-3'>
          <h1 className="text-white ms-3">Buscador de Colaboradores</h1> 
          <input type="text" className='me-3 w-50' onChange={(e) => setSearch(e.target.value)} placeholder='Busca un colaborador'/>
        </div>

        <Form onSubmit={onSubmit}/>

        <table className='table table-striped table-dark mt-5'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            workers.filter((worker) => {
              return search.toLowerCase() === ''
              ? worker
              : worker.nombre.toLowerCase().includes(search);
            })
            .map((worker) => {
              return <Item key={worker.id} worker={worker}/>;
            })
          }
        </tbody>
        </table>
      </>
    )
    
  }
  
  export default App;