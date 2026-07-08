import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import Authors from "../pages/Authors";
import Borrow from "../pages/Borrow";
import Users from "../pages/Users";

function AdminRoutes() {

    return(

        <Routes>

            <Route element={<AdminLayout/>}>

                <Route path="dashboard" element={<Dashboard/>}/>

                <Route path="books" element={<Books/>}/>

                <Route path="categories" element={<Categories/>}/>

                <Route path="authors" element={<Authors/>}/>

                <Route path="borrow" element={<Borrow/>}/>

                <Route path="users" element={<Users/>}/>

            </Route>

        </Routes>

    )

}

export default AdminRoutes;