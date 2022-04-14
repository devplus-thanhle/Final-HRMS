import axios from "axios";

export const getDataAPI = async (url, token) => {
  const res = await axios.get(url, {
    headers: { Authorization: token },
  });
  return res;
};
export const postDataAPI = async (url, token) => {
  const res = await axios.post(url, {
    headers: { Authorization: token },
  });
  return res;
};
export const putDataAPI = async (url, token) => {
  const res = await axios.put(url, {
    headers: { Authorization: token },
  });
  return res;
};
export const patchDataAPI = async (url, token) => {
  const res = await axios.patch(url, {
    headers: { Authorization: token },
  });
  return res;
};
export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(url, {
    headers: { Authorization: token },
  });
  return res;
};
