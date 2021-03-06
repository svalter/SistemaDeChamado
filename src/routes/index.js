import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Custumers from '../pages/Custumers';
import NewCalled from '../pages/NewCalled';

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
                <>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/custumers" element={<Custumers/>}/>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/newCalled" element={<NewCalled />} />
                    <Route path="/newCalled/:id" element={<NewCalled />} />
                
                </>

            )}
            <Route path="*" element={signed ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
        </Routes>
    )
}