import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';


export default function RoutesApp() {

    const PrivateRoute = ({ children, redirectTo }) => {
        const isAuthenticated = localStorage.getItem("token") !== null;
        return isAuthenticated ? children : <Navigate to={redirectTo} />
    }

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route
                path="/home"
                element={
                    <PrivateRoute redirectTo="/">
                        <Dashboard />
                    </PrivateRoute>}
            />
        </Routes>
    )
}