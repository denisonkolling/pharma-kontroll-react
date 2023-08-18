import Login from '../pages/login';
import Signup from '../pages/signup';
import { Route, Routes } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default PublicRoutes