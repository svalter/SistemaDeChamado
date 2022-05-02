import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';


export default function RoutesApp() {
    const { signed, loading } = useContext(AuthContext);

    return (
        <Routes>
            {!signed && (
                <>
                    <Route path="/auth" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                </>

            )}
            {signed && (
                <Route path="/dashboard" element={<Dashboard />} />
            )}
            <Route path="*" element={signed ? <Navigate to="/dashboard"/> : <Navigate to="/auth"/>} />
        </Routes>
    )
}