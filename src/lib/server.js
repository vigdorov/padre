import axios from 'axios';

const Auth = {
  getContent: () => {
    return axios({
      url: 'https://api.jsonbin.io/b/5d13df62ca3e080d7b645c07/latest',
      method: 'get',
      headers: {
        'secret-key':
          '$2a$10$8V4/OGuY7lMenEt3QVyJXuduXErraPEMdeSWGjAuHaCXM7Ou18gLW',
      },
    }).then(res => {
      console.log(res);
      return res.data;
    });
  },
  setContent: data => {
    const jsonData = JSON.stringify(data);
    axios({
      url: 'https://api.jsonbin.io/b/5d13df62ca3e080d7b645c07',
      method: 'put',
      headers: {
        'secret-key':
          '$2a$10$8V4/OGuY7lMenEt3QVyJXuduXErraPEMdeSWGjAuHaCXM7Ou18gLW',
        'Content-type': 'application/json',
      },
      data: jsonData,
    });
  },
};

export default Auth;
