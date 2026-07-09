import axiosClient from "../api/axiosClient";

const bookService = {
  getAll() {
    return axiosClient.get("/books");
  },

  getById(id) {
    return axiosClient.get(`/books/${id}`);
  },

  create(data) {
    return axiosClient.post("/books", data);
  },

  update(id, data) {
    return axiosClient.put(`/books/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/books/${id}`);
  },
};

export default bookService;