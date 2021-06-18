import axiosWithAuth from '../helpers/axiosWithAuth';
import axios from 'axios';

const fetchColorService = () => {
    axios.get('https://api.github.com/user', {
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