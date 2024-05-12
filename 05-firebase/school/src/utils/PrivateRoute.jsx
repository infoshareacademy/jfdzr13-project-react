import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const location = useLocation();
    const currentUser = "exists";

  return (
    <>
    {currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
    </>
  )
}

export default PrivateRoute