import { Dropbox } from 'dropbox';
// import { DropboxTeam } from 'dropbox';
// import { polyfill } from 'es6-promise'
import fetch from 'isomorphic-fetch';


const Auth = (function () {
  return {
    start: function () {
      const dbx = new Dropbox({
        accessToken: 'yJgu3uQRP8YAAAAAAAABdJKQSnWOHF-oilDwP6uK8vRnZZObM51wJs_civAcYpct',
        fetch: fetch
      });
      dbx.filesListFolder({path: ''})
        .then( response => {
          console.log(response);
        })
        .catch( error => {
          console.log(error);
        });
    },
  };
})();

export default Auth;