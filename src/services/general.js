import axios from 'axios'
import {promiser} from './axios';
const BASE_URI = 'https://pacific-eyrie-13165.herokuapp.com/'




export const cargoServices = {
    async getCompany(companyId = {}){
        return axios.get(`BASE_URL/companies/${companyId}`)
    }

}



