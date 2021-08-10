import axios from 'axios';

export const getToken = (username) =>
  axios.get(`https://957f6d337f10.ngrok.io/token/${username}`).then((twilioUser) => twilioUser.data.jwt);
