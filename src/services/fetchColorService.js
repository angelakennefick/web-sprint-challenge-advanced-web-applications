import axiosWithAuth from '../helpers/axiosWithAuth';
import axios from 'axios';

const fetchColorService = () => {
    axios.get('http://localhost:5000/api/colors', {
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
    
}

export default fetchColorService;