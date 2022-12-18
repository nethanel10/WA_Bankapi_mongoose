import axios from "axios";
let myurl='http://localhost:7000/api/bankapi';
if (process.env.NODE_ENV === 'production') {
    myurl = 'bankapi ';
  }
  
export const Api=axios.create({
    baseURL:myurl,
});