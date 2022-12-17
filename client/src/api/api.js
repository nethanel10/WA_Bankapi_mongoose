import axios from "axios";
let myurl='http://localhost:7000/api/bankapi';
export const Api=axios.create({
    baseURL:myurl,
});