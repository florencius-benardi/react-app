import * as axios from "axios";

export default class PermissionsAPI {
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

    createPermissions = (params) => {
        return this.init().post('/permissions/create-permission', { params });
    }
    showPermissions = (params) => {
        return this.init().get('/permissions/read-all-permission', { params });
    }
    showPermissionbyID(id) {
        return this.init().get('/permissions/read-permission', id);
    }
    updatePermissions = (params) => {
        return this.init().patch('/permissions/update-permission', { params });
    }
    deletePermissionbyID(id) {
        return this.init().delete('/permissions/delete-permission', id);
    }
}