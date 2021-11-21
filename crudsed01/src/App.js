import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button,Container} from 'reactstrap';



function App(){
  const [inputText, setInputText] = useState("");
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
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onUserSubmit = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users`;
    const conf = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: inputText}),
    };

    try {
      const response = await fetch(url, conf);
      const obj = await response.json();

      if (obj.status === "success") {
        await fetchUsers();
        setInputText("");        
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onUserDelete = async (id) => {
    const url = `${process.env.REACT_APP_API_URL}/users/${id}`;
    const conf = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, conf);
      const obj = await response.json();

      if (obj.status === "success") {
        await fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Container>
      <br/>
      <label>Usuario</label>{" "}
      <input type="text" value={inputText} onChange={onInputChange}/>{" "}
      

    <Button color="primary" onClick={onUserSubmit}>Insertar Nuevo Usuario</Button>
    <br/><br/>

      <Table>
      <thead><tr><th>Usuario</th>
      <th>Roles</th>
      <th>Botones</th></tr></thead>
      <tbody>
      {usuario && usuario.map(({_id, usuario}) =>(
        <tr>
        <td key={_id}>{_id}</td>
        <td>{usuario}</td>
        <td><Button color="primary">Editar</Button>{"\t\t\t\t"}
        <Button color="danger" onClick={()=> onUserDelete(_id)}>Eliminar</Button></td>
        </tr>
      ))}    
        
      </tbody>

      </Table>

    </Container>
    </>
  );
}

export default App;
