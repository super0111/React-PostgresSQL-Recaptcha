import axios from 'axios';
import { getUser } from '../utils/user';

let apiBase = process.env.REACT_APP_API_BASEURL;



const sendRequest = async (url, method, body = {}, options = {}) => {
  const user = getUser();

  if (user && user.token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  }

  return await axios[method](apiBase + url, body).then(res => {
    return res
  });
}

const requests = {
  get: (url, options) => sendRequest(url, 'get', undefined, options),
  post: (url, body) => sendRequest(url, 'post', body),
  put: (url, body) => sendRequest(url, 'put', body),
  delete: (url) => sendRequest(url, 'delete')
};




// const buildUrlWithQueryParams = (url, params) => {
//   const searchParams = new URLSearchParams();
//   const entries = Object.entries(params);
//   for (const [key, val] of entries) {
//     if (typeof val === 'undefined') {
//       continue;
//     }

//     searchParams.append(key, val);
//   }

//   const query = searchParams.toString();

//   if (query.length) {
//     return `${url}?${query}`
//   } else {
//     return url;
//   }
// };


export const getAllUser = async () => {
  return requests.get("/posts");
}


export const addUser = async (req) => {
  return requests.post("/posts", req);
}


export const deleteUser = async (id) => {
  return requests.delete(`/posts/${id}`);
}


export default {
  getAllUser,
  addUser
}
