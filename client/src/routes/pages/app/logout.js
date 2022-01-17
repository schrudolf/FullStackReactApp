import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import createNewAxios from "../../../axios/axios";
import AC from "../../../redux/action-creators/bindActionCreators";
import { useSelector } from "react-redux";

export default function AppLogout() {
  const isLogged = useSelector((state) => state.isLogged);
  const actionCreators = AC();
  async function userLogout() {
    const response = await createNewAxios("/app/logout", "get");
    if (response.status === 200) {
      actionCreators.setLoggedStatus(!isLogged);
    }
  }
  useEffect(() => {
    userLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Navigate to="/login" />;
}
