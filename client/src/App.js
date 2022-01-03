import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

import PageLoading from "./components/ui/pageLoading";

import createNewAxios from "./axios/axios";
import { useSelector } from "react-redux";
import AC from "./redux/action-creators/bindActionCreators";

function App() {
  // get isLogged from reducer (default : false)
  const isLogged = useSelector((state) => state.isLogged);
  // if sessionReady rendering route
  const [sessionReady, setSessionReady] = useState(false);
  //get all actinCreators
  const actionCreators = AC();

  useEffect(() => {
    const getSession = async () => {
      const response = await createNewAxios("/session", "GET");
      if (response.status === 200) {
        setSessionReady(true);
        //Every page load -> if user logged but isLogged false (default false) set it to true
        if (isLogged !== response.data.user.isLogged) {
          actionCreators.setLoggedStatus(response.data.user.isLogged);
        }
      }
    };
    getSession();
  }, []);

  if (sessionReady) {
    return (
      <BrowserRouter>
        <Routing isLogged={isLogged} />
      </BrowserRouter>
    );
  } else {
    return <PageLoading />;
  }
}

export default App;
