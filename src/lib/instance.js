import axios from 'axios';
import { getCookie } from './cookies';

const instance = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    authorization: `${getCookie('Access')}`,
    'Refresh-Token': `${getCookie('Refresh')}`,
    nickname: 'nickname',
  },
});

export default instance;
