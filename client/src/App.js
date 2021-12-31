import {useEffect, useState} from "react"
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";

import createNewAxios from "./axios/axios";

function App() {
  const [session, setSession] = useState(false);
  useEffect(async () => {
    const response = await createNewAxios("/", "GET");
    console.log(response.data)
    if(response.status === 200){
      setSession(true);
    }
  }, [])

  if(session){
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }else{
    return (
    <p>Loading...</p>
    );
  }
}

export default App;
