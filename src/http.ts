import axios, { AxiosInstance } from "axios";

/* В baseUrl въебываем юрл вашего серва */
export const http: AxiosInstance = axios.create({
  baseURL: "Your Server URL here.."
});
