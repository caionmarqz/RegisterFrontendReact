import axios from 'axios';

const API_URI = "http://localhost:8080/reg";

class service {

    Registrar(dados) {
        return axios.post(API_URI, dados);
    }

}

export default new service();