import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import LoadingButton from "../../../components/ui/loadingButton";
import createNewAxios from "../../../axios/axios";

export default function NewPassword() {
  const [validToken, setValidToken] = useState(false);
  // get the tokenid from route params
  const { tokenid } = useParams();
  // const [loadingButton, setLoadingButton] = useState(false);
  const tokenCheck = async () => {
    const response = await createNewAxios("/forgot/" + tokenid, "get");
    if (response.status === 200) {
      setValidToken(true);
    } else {
      console.log("Not valid or exists");
    }
  };
  useEffect(() => {
    tokenCheck();
  });

  if (!validToken) {
    return <h1>Token is not valid</h1>;
  } else {
    return <h1>Token is valid</h1>;
  }
}
