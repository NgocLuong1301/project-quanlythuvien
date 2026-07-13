import axiosClient from "../api/axiosClient";

const categoryService = {
  getAll() {
    return axiosClient.get("/categories");
  },

  create(data) {
    return axiosClient.post("/categories", data);
  },

  update(id, data) {
    return axiosClient.put(`/categories/${id}`, data);
  },

  remove(id) {
    return axiosClient.delete(`/categories/${id}`);
  },
};

export default categoryService;