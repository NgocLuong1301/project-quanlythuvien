import { Routes, Route, Navigate } from "react-router-dom";

import AdminRoutes from "./admin/routes/AdminRoutes";
import UserRoutes from "./user/routes/UserRoutes";
import ProtectedRoute from "./common/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminRoutes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/*"
        element={
          <UserRoutes />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;