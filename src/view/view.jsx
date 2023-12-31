import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AutoScroll from "../helpers/autoScroll"
import AdminLayout from "../layouts/adminLayout"

const Users = lazy(() => import('../pages/users/users'))
const SingleUser = lazy(() => import('../pages/users/single/singleUser'))
const Reports = lazy(() => import('../pages/reports/reports'))
const Analytics = lazy(() => import('../pages/analytics/analytics'))

const View = () => {
    return (
        <Router>
            <Suspense fallback={null}>
                <AutoScroll />
                <Routes>
                    <Route
                        path="/"
                        element={<AdminLayout />}
                    >
                        <Route index path="users" element={<Users />} />
                        <Route path="users/:id" element={<SingleUser />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="analytics" element={<Analytics />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default View