import axiosClient from "../api/axiosClient";

const authorService = {
  getAll() {
    return axiosClient.get("/authors");
  },

  create(data) {
    return axiosClient.post("/authors", data);
  },

  update(id, data) {
    return axiosClient.put(`/authors/${id}`, data);
  },

  remove(id) {
    return axiosClient.delete(`/authors/${id}`);
  },
};

export default authorService;