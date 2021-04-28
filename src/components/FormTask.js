import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormTask extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        }

        this.saveNewTask = this.saveNewTask.bind(this);
    }

    saveNewTask(){
        let newTasks = {
            title: document.getElementById("formBasicTitle").value,
            responsible: document.getElementById("formBasicResponsible").value,
            description: document.getElementById("formBasicDescription").value,
            priority: document.getElementById("formBasicPriority").value
        }

        this.setState(state => ({
            ...state, 
            title: newTasks.title,
            responsible: newTasks.responsible,
            description: newTasks.description,
            priority: newTasks.priority }), () => {
                this.props.addTask(this.state);
            }
        );
    }

    render(){
        return(
            <div className="w-25 bg-light p-4 rounded m-1 h-25">
                <Form className="text-left">
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder="ingrese el titulo de la tarea" />
                    </Form.Group>
                    <Form.Group controlId="formBasicResponsible">
                        <Form.Label>Responsable</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el responsable" />
                    </Form.Group>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa una descripción" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPriority">
                        <Form.Label>Prioridad</Form.Label>
                        <Form.Control as="select" custom>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={ this.saveNewTask }>
                        Guardar
                    </Button>
                </Form>    
            </div>                                                                   
        )                                                    
    }
}

export default FormTask;