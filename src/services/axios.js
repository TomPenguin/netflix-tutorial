import axios from "axios";

export const baseURL = "https://api.themoviedb.org/3";
export const request = axios.create({ baseURL });
