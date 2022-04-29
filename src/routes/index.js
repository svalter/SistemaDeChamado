import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';



export default function RoutesApp() {


    function PrivateRoute({ children }) {
        const { signed, loading } = useContext(AuthContext);
        return signed ? children : <Navigate to="/" />;
    }

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/home" element={<PrivateRoute />}>
                <Route element={<Dashboard />} />
            </Route>
        </Routes>
    )
}