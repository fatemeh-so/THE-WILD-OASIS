import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.load the authenticatedUser

  const { isLoading, isAuthenticated } = useUser();
  

  // 3.if there is no authenticated user,redirect to login page
  useEffect(function () {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated,isLoading]);

  // 2.while loading show spinner
  if (isLoading) return <Spinner />;
  // 4.if there is a user render the app
  if (isAuthenticated) return <div>{children}</div>;
}

export default ProtectedRoute;
