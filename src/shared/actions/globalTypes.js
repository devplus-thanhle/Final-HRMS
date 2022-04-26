export const GLOBALTYPES = {
  ALERT: "ALERT",
  LOADING: "LOADING",
};

export const EditData = (data, id, post) => {
  console.log({ data, id, post });
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
