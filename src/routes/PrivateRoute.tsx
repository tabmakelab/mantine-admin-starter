import { useEffect } from "react";
import { Navigate } from "react-router-dom";
// import useAppState from "../store/appState";
const useAuth = () => {
  if (!false) {
    return false;
  }

  return true;
};

export default ({ children }: any) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/sign-in" />;
};
