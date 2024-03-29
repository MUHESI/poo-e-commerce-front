import axios from "axios";
// const URL_API = "https://poo-e-commerce-backend.herokuapp.com";
const URL_API = "http://localhost:3000/";

export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios({
    method: "post",
    url: `${URL_API}/api/${url}`,
    data: post,
    headers: { Authorization: `Bearer ${token ? token : ""}` }
  });

  return res;
};
export const getAPI = async (url: string, token?: string) => {
  const res = await axios({
    method: "get",
    url: `${URL_API}/api/${url}`,
    headers: { Authorization: `Bearer ${token ? token : ""}` }
  });

  return res;
};
