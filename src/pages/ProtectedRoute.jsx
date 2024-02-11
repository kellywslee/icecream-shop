import { Navigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children, requiredAdmin }) {
  const { user } = useCurrentUser();

  if (!user || (requiredAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
