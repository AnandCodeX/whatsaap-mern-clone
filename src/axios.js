import axios from 'axios'

const instance = axios.create({
    baseURL:'http://locolhost:9000'
})

export default instance;