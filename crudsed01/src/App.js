import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button,Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';



function App(){
  
  const[usuario,setUsuario] = useState("")
  const[roles,setRoles] = useState("")

  const addToList = () => {
    console.log(usuario + roles);
  }
  return (
    <>
    <Container>
      <br/>
      <label>Usuario</label>{" "}
      <input type="text" onChange={(event) =>{
        setUsuario(event.target.value)}}/>{" "}
      <label>Rol</label> {" "}
      <input type="text" onChange={(event) =>{
        setRoles(event.target.value)}}/>{" "}

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
