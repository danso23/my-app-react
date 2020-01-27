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
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return(
            <div className="card mt-4">
                <form className="card-body">
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
                            placeholder="Responsable"
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
                </form>
            </div>
        )
    }
}


export default TodoForm;