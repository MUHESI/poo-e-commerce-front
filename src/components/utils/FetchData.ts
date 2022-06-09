import axios from "axios";
const URL_API = "http://localhost:5000";

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
  // const res = await axios.get(`/api/${url}`);
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

// export const deleteAPI = async (url: string, token?: string) => {
//   const res = await axios.delete(`${process.env.REACT_APP_api_URL}api/${url}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res;
// };

// export default function setAuthorizationToken(token: any) {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// }
