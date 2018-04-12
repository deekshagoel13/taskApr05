import axios from 'axios';

let axiosI=axios.create({
    baseURL:'http://localhost:3005/'
});
export default axiosI;