import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
    {id:1, origen: 'Ciudad A', destino: 'Ciudad B', date: '2024-03-10', numvuelo: 'ABC123' },
    {id:2, origen: 'Ciudad C', destino: 'Ciudad D', date: '2024-03-15', numvuelo: 'DEF456' },
];

const App = () => {
  state = {
    data: data,
   
    form: {
      id: "",
      origen: "",
      destino:"",
      date: "",
      numvuelo: "",
    },
  };
  return (
   <h1>CRUD</h1>
  )
}

export default App
