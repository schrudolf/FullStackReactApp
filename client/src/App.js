import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

import PageLoading from "./components/ui/pageLoading";

import createNewAxios from "./axios/axios";

import { useSelector } from "react-redux";
import AC from "./redux/action-creators/bindActionCreators";

function App() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionData, setSessionData] = useState(null);
  const isLogged = useSelector((state) => state.isLogged);
  // get all action creators
  const allAC = AC();
  // get session from server every page load
  const getSession = async () => {
    const response = await createNewAxios("/session", "GET");
    if (response.status === 200) {
      setSessionData(response.data.sessionData);
      setIsSessionActive(true);
    }
  };
  
  useEffect(() => {
    getSession();
  }, []);

  // if we get session, set data with redux
  if(isSessionActive){
    allAC.setLoggedStatus(sessionData.isLogged)
  }
  // after session is ready and if client user logged status === server logged status render app
  if (isSessionActive && sessionData.isLogged === isLogged) {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  } else {
    return <PageLoading />;
  }
}

export default App;
