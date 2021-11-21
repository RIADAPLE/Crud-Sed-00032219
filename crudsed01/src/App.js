import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button,Container} from 'reactstrap';



function App(){
  
  const[usuario,setUsuario] = useState([])

  const fetchUsers = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users`;
    try {
      const response = await fetch(url);
      const obj = await response.json();
      const results = obj.data;
      setUsuario(results);
    } catch (error) {
      console.error(error);
    }
  }
  const addToList = () => {
    console.log(usuario);
  }
  return (
    <>
    <Container>
      <br/>
      <label>Usuario</label>{" "}
      <input type="text" onChange={(event) =>{
        setUsuario(event.target.value)}}/>{" "}
      

    <Button color="primary" onClick={addToList}>Insertar Nuevo Usuario</Button>
    <br/><br/>

      <Table>
      <thead><tr><th>Usuario</th>
      <th>Roles</th>
      <th>Botones</th></tr></thead>
      <tbody>
      
          <tr>
            <td>{"id"}</td>
            <td>{"usuario"}</td>
            <td><Button color="primary">Editar</Button>{"\t\t\t\t"}
            <Button color="danger">Eliminar</Button></td>
            </tr>
        
      </tbody>

      </Table>

    </Container>
    </>
  );
}

export default App;
