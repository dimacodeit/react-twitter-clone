import { Navigate } from 'react-router';

export interface IProtectedRouteProps {
  children: JSX.Element;
  canLoad: boolean;
  redirectTo: string;
}

export default function ProtectedRoute({
  children,
  canLoad,
  redirectTo,
}: IProtectedRouteProps) {
  if (canLoad) return children;
  return <Navigate to={redirectTo} replace />;
}
