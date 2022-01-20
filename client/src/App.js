import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";
import PageLoading from "./components/ui/pageLoading";
import createNewAxios from "./axios/axios";
import { useSelector } from "react-redux";

function App() {
  // if sessionReady rendering route
  const [session, setSession] = useState({ isLogged: null, isReady: false });
  // get isLogged from reducer (default : false)
  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    const getSession = async () => {
      const response = await createNewAxios("/session", "GET");
      if (response.status === 200) {
        setSession({
          isLogged: response.data.isLogged,
          isReady: true,
        });
      }
    };
    getSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);
  if (session.isReady) {
    return (
      <BrowserRouter>
        <Routing isLogged={session.isLogged} />
      </BrowserRouter>
    );
  } else {
    return <PageLoading />;
  }
}

export default App;
