import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
// import LoadingButton from "../../../components/ui/loadingButton";
import createNewAxios from "../../../axios/axios";

export default function NewPassword() {
  // const [loadingButton, setLoadingButton] = useState(false);
  const [responseStatus, setResponseStatus] = useState();
  // get the tokenid from route params
  const { tokenid } = useParams();

  const tokenCheck = async () => {
    const response = await createNewAxios("/forgot/" + tokenid, "get");
    setResponseStatus(response.status);
  };

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (responseStatus > 200) {
    return <Navigate to="/forgot" />;
  } else {
    return <h1>Valid token</h1>
  }
}
