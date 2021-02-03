import React, { Component } from 'react'
import RegisterService from '../services/service'

export default class register extends Component {
    constructor(props) {
        super(props)

        this.state = {

            nome: '',
            email: '',
            cpf: '',
            nascimento: '',

            errors: []
        }

        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeNascHandler = this.changeNascHandler.bind(this);

        this.registrar = this.registrar.bind(this);
        this.cpfMask = this.cpfMask.bind(this);
        this.formatCpf = this.formatCpf.bind(this);

        this.hasError = this.hasError.bind(this);
    }


    hasError(key) {
        if (this.state.errors[key] == null)
        return false;
        else
        return (this.state.errors[key] != "");
    }

    registrar = (e) => {
        e.preventDefault();
        let dados = { nome: this.state.nome, email: this.state.email, cpf: this.state.cpf, dta_nasc: this.state.nascimento };
        console.log('enviar dados --> ' + JSON.stringify(dados));
        RegisterService.Registrar(dados).then((res) => {
            if (res.data.valido=="1") {
                this.props.history.push('/main');
            }
            else {
                this.setState({
                    errors: res.data
                });
            }
        })
    }


    cpfMask = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }

    changeCpfHandler = (e) => {
        this.setState({ cpf: this.cpfMask(e.target.value) })
    }

    formatCpf = (e) => {
        e.target.value = this.state.cpf;
    }

    changeNomeHandler = (e) => {
        this.setState({ nome: e.target.value })
    }

    changeNascHandler = (e) => {
        this.setState({ nascimento: e.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="card col-md-6 offset-md-3">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className={this.hasError("nome_valid") ? "form-control is-invalid" : "form-control"} placeholder="Nome Completo" onChange={this.changeNomeHandler} required />
                                <div className={this.hasError("nome_valid") ? "inline-errormsg" : "hidden"}><label>{this.state.errors.nome_valid}</label></div>
                            </div>
                            <div className="form-group">
                                <label>CPF</label>
                                <input type="text" className={this.hasError("cpf_valid") ? "form-control is-invalid" : "form-control"} placeholder="000.000.000-00" maxlength="14" onBlur={this.formatCpf} onChange={this.changeCpfHandler} required />
                                <div className={this.hasError("cpf_valid") ? "inline-errormsg" : "hidden"}><label>{this.state.errors.cpf_valid}</label></div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className={this.hasError("email_valid") ? "form-control is-invalid" : "form-control"} placeholder="email@example.com" onBlur={this.changeEmailHandler} onChange={this.changeEmailHandler} required />
                                <div className={this.hasError("email_valid") ? "inline-errormsg" : "hidden"}><label>{this.state.errors.email_valid}</label></div>
                            </div>
                            <div className="form-group">
                                <label>Data de nascimento</label>
                                <input type="date" className={this.hasError("dta_nasc_valid") ? "form-control is-invalid" : "form-control"} onChange={this.changeNascHandler} required />
                                <div className={this.hasError("dta_nasc_valid") ? "inline-errormsg" : "hidden"}><label>{this.state.errors.dta_nasc_valid}</label></div>
                            </div>

                            <button className="btn btn-primary button" onClick={this.registrar}>Registrar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}