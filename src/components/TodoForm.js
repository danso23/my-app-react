import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleInput(e) {        
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });        
    }

    handleSumbit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.onAddTodo(this.state);
        console.log("Enviando...");
    }


    render() {
        return(
            <div className="card mt-4">
                <form className="card-body" onSubmit={this.handleSumbit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Titulo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Nombre del label"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default TodoForm;