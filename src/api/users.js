import api from 'services/api';

export function getListUsers (char) {

  return api.get(`users/search?name=${char}`)
    .then((r) => r)
    .catch( err => { throw err } )
}
