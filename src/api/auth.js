import api from 'services/api';
import axios from 'axios';
import config from 'config';

export function login (auth) {
  return api.post('auth/login', auth)
    .then((r) => r.data)
    .catch( err => { throw err } )
}

export function signUp (auth) {
  return api.post('auth/sign-up', auth)
    .then((r) => r.data)
    .catch( err => { throw err } )
}

export function authGoogle() {
  axios.get(config.path.BASE_URL + '/auth/google')
  .then(res => {
    console.log(res)
  })
  .catch( err => { throw err } )
}