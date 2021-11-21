import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button,Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {_id: 100, user: "Andrea"},
  {_id: 101, user: "Adrián"},
  {_id: 102, user: "Michelle"},
  {_id: 103, user: "Aparicio"},
];

function App(){
  
  return (
    <>
    <Container>
      <br/>
    <Button color="primary">Insertar Nuevo Usuario</Button>
    <br/><br/>

      <Table>
      <thead><tr><th>Id</th>
      <th>Usuario</th>
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
