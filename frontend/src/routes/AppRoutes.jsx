import { Routes, Route, Navigate } from "react-router-dom";

import AdminRoutes from "../admin/routes/AdminRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" />} />

      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default AppRoutes;