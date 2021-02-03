import React, { Component } from 'react'

export default class main extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div class="container">
                       <h1 className="display-4">Bem vindo ao sistema!</h1>
                        <p className="lead">Se você estiver vendo esta tela é que o sistema está rodando normalmente</p>
                        <hr className="my-4" />
                        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Testar novamente</button>
                    </div>
                </div>
            </div>
        )
    }
}
