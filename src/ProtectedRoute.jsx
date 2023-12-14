import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    // const navigate = useNavigate
    const authenticated = false
    if(!authenticated){
        return <Navigate to="/login" />
    }else{
        
        return (
            <Outlet/>
          )
    }
  
}

export default ProtectedRoute