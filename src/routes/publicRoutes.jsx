import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default PublicRoutes