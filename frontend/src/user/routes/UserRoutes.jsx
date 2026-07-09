import { Routes, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";

import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Favorite from "../pages/Favorite";
import BorrowRequest from "../pages/BorrowRequest";
import BorrowHistory from "../pages/BorrowHistory";
import Review from "../pages/Review";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>

        <Route index element={<Home />} />

        <Route path="books" element={<Books />} />

        <Route path="books/:id" element={<BookDetail />} />

        <Route path="favorite" element={<Favorite />} />

        <Route path="borrow-request" element={<BorrowRequest />} />

        <Route path="borrow-history" element={<BorrowHistory />} />

        <Route path="review" element={<Review />} />

        <Route path="profile" element={<Profile />} />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default UserRoutes;