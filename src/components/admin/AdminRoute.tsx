// src/components/admin/AdminRoute.tsx
import ProtectedRoute from './ProtectedRoute';
import ProjectAdminPanel from './ProjectAdminPanel';

/**
 * This component wraps the ProjectAdminPanel with the ProtectedRoute
 * to ensure it's only accessible in development mode.
 */
const AdminRoute = () => {
  return (
    <ProtectedRoute>
      <ProjectAdminPanel />
    </ProtectedRoute>
  );
};

export default AdminRoute;