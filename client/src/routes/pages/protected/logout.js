import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import createNewAxios from "../../../axios/axios";

export default function AppLogout({ isLogged, setIsLogged }) {
  async function userLogout() {
    const response = await createNewAxios("/app/logout", "get");
    if (response.status === 200) {
      setIsLogged(!isLogged);
    }
  }
  useEffect(() => {
    userLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Navigate to="/login" />;
}
