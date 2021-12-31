import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

import createNewAxios from "./axios/axios";

function App() {
  const [session, setSession] = useState(false);

  const getSession = async () => {
    const response = await createNewAxios("/session", "GET");
    if (response.status === 200) {
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
    return <p>Loading...</p>;
  }
}

export default App;
