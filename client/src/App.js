import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";
import PageLoading from "./components/ui/pageLoading";
import createNewAxios from "./axios/axios";

import LoggedHeader from "./components/home/loggedHeader";
import Header from "./components/home/header";
import Footer from "./components/home/footer";

import "./app.css"

function App() {
  // if session is ready start rendering the routes
  const [sessionReady, setSessionReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const response = await createNewAxios("/session", "GET");
      if (response.status === 200) {
        setIsLogged(response.data.isLogged);
        setSessionReady(true);
      }
    };
    getSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);
  if (sessionReady) {
    return (
      <BrowserRouter>
          {isLogged ? <LoggedHeader /> : <Header />}
          <Routing isLogged={isLogged} setIsLogged={setIsLogged} />
          <Footer />
      </BrowserRouter>
    );
  } else {
    return <PageLoading />;
  }
}

export default App;
