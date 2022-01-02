import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

import PageLoading from "./components/ui/pageLoading";

import createNewAxios from "./axios/axios";

// import { useSelector } from "react-redux";
// import AC from "./redux/action-creators/bindActionCreators";

function App() {
  const [session, setSession] = useState(false);
  // const isLogged = useSelector((state) => state.isLogged);
  // const allAC = AC();
  const getSession = async () => {
    const response = await createNewAxios("/session", "GET");
    if (response.status === 200) {
      // allAC.setLoggedStatus(true)
      setSession(true);
    }
  };
  
  useEffect(() => {
    getSession();
  }, []);

  if (session) {
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
