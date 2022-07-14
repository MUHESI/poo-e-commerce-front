import axios from "axios";
const URL_API = "https://poo-e-commerce-backend.herokuapp.com";

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

export const patchAPI = async (url: string, post: object) => {
  const res = await axios({
    method: "patch",
    url: `${URL_API}/api/${url}`,
    data: post
  });
  return res;
};

export const putAPI = async (url: string, post: object) => {
  const res = await axios({
    method: "put",
    url: `${URL_API}/api/${url}`,
    data: post
  });
  return res;
};
