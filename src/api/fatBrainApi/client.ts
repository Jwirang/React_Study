import axios from "axios"

const fatBrainClient = axios.create({
    baseURL: 'http://192.168.0.2',
    withCredentials: true,
})

export default fatBrainClient