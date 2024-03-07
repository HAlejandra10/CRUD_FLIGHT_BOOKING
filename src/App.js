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
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      origen: "",
      destino:"",
      date: "",
      numvuelo: "",
    },
  };
  return (
    <>
    <Container>
    <br />
      <Button color="success" >Crear</Button>
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Fecha</th>
            <th>Número de vuelo</th>

          </tr>
        </thead>

        <tbody>
          {this.state.data.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.origen}</td>
              <td>{dato.destino}</td>
              <td>{dato.date}</td>
              <td>{dato.numvuelo}</td>
              <td>
                <Button
                  color="primary"
                  
                >
                  Editar
                </Button>{" "}
                <Button color="danger" >Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

    <Modal isOpen={this.state.modalActualizar}>
      <ModalHeader>
       <div><h3>Editar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
           Id:
          </label>
        
          <input
            className="form-control"
            readOnly
            type="text"
            value={this.state.form.id}
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Origen: 
          </label>
          <input
            className="form-control"
            name="origen"
            type="text"

          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Destino: 
          </label>
          <input
            className="form-control"
            name="destino"
            type="text"
      
            
          />
        </FormGroup>

        <FormGroup>
          <label>
            Fecha: 
          </label>
          <input
            className="form-control"
            name="date"
            type="date"
      
      
          />
        </FormGroup>

        <FormGroup>
          <label>
            Número de Vuelo: 
          </label>
          <input
            className="form-control"
            name="numvuelo"
            type="text"
    
            
          />
        </FormGroup>

      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"
          
        >
          Editar
        </Button>
        <Button
          color="danger"
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>



    <Modal>
      <ModalHeader>
       <div><h3>Insertar Registro</h3></div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>
            Id: 
          </label>
          
          <input
            className="form-control"
            readOnly
            type="text"
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Origen: 
          </label>
          <input
            className="form-control"
            name="Origen"
            type="text"
           
          />
        </FormGroup>
        
        <FormGroup>
          <label>
            Destino: 
          </label>
          <input
            className="form-control"
            name="destino"
            type="text"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Fecha: 
          </label>
          <input
            className="form-control"
            name="date"
            type="date"
        
          />
        </FormGroup>

        <FormGroup>
          <label>
            Número de Vuelo: 
          </label>
          <input
            className="form-control"
            name="numvuelo"
            type="text"
        
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          color="primary"

        >
          Insertar
        </Button>
        <Button
          className="btn btn-danger"
          
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  </>
  )
}

export default App
