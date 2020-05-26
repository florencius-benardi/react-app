import * as axios from "axios";

export default class UsersAPI {
    constructor() {
        this.token = null
        this.client = null
        this.url = process.env.REACT_API_URL
    }

    init = () => {
        this.token = localStorage.getItem('api_token')
        let headers = {
            'Accept': 'application/json'
        }

        if (this.token) {
            headers.Authorization = `Bearer ${this.api_token}`
        }

        this.client = axios.create({
            baseURL: this.url,
            timeout: 310000,
            headers: headers,
        })

        return this.client
    }

    login(email, password) {
        return this.init().post('/user/login', { email, password });
    }

    register = (params) => {
        return this.init().post('/user/register', { params});
    }
}