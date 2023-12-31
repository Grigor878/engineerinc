import React, { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/loader/loader";
import { Aside } from "../components/aside/aside";

const AdminLayout = () => {
    const { pathname } = useLocation();

    if (pathname === "/") {
        return <Navigate replace to="/users" />;
    }

    return (
        <div className="admin_layout">
            <Aside />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default AdminLayout