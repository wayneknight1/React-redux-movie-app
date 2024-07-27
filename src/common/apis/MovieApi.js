import axios from "axios";

export default axios.create({
    baseURL: 'http://www.omdbapi.com' //try switching with https
})