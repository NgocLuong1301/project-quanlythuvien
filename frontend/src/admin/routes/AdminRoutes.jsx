import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import Favorite from "../pages/Favorite";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import Authors from "../pages/Authors";
import Publishers from "../pages/Publishers";
import BorrowRequests from "../pages/BorrowRequests";
import Borrows from "../pages/Borrows";
import Users from "../pages/Users";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="books" element={<Books />} />

        <Route path="categories" element={<Categories />} />

        <Route path="authors" element={<Authors />} />

        <Route path="publishers" element={<Publishers />} />

        <Route
          path="borrow-requests"
          element={<BorrowRequests />}
        />

        <Route path="favorite" element={<Favorite />} />

        <Route path="borrows" element={<Borrows />} />

        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;