import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const PrivateRoute = () => {
    const location = useLocation();
    const { currentUser } = useAuth();

  return (
    <>
    {currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
    </>
  )
}

export default PrivateRoute