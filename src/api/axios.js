import axios from "axios";

export default axios.create({
    baseURL: 'https://expresscareteambackend.herokuapp.com/api/v1'
})