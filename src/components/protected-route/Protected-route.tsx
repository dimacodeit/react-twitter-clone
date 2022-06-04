import { FunctionComponent } from 'react';
import { Navigate } from 'react-router';
interface ProtectedRouteProps {
  children: JSX.Element;
  canLoad: boolean;
  redirectTo: string;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  children,
  canLoad,
  redirectTo,
}: ProtectedRouteProps) => {
  if (canLoad) return children;
  return <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
