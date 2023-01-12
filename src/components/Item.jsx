const Item = ({worker, handleDelete}) => { 

    const {id, nombre, correo} = worker;
    
    return(        
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{correo}</td>
        </tr>
    )
 }
 export default Item;