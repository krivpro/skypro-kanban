import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import AddTask from '../../pages/AddTask';
import EditTask from '../../pages/EditTask';
import ViewTask from '../../pages/ViewTask';
import ExitModal from '../../pages/ExitModal';
import NotFound from '../../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/signin" element={<SignIn />} />
      
      <Route path="/signup" element={<SignUp />} />
      
      <Route
        path="/exit"
        element={
          <ProtectedRoute>
            <ExitModal />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/task/new"
        element={
          <ProtectedRoute>
            <AddTask />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/task/:id"
        element={
          <ProtectedRoute>
            <ViewTask />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/task/:id/edit"
        element={
          <ProtectedRoute>
            <EditTask />
          </ProtectedRoute>
        }
      />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

