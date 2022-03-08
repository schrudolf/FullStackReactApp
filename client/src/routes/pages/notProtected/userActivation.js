import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import createNewAxios from "../../../axios/axios";
import PageLoading from "../../../components/ui/pageLoading";

export default function UserActivation() {
  const [data, setData] = useState(false);
  const { ref_id } = useParams();
  const getActivation = async () => {
    const response = await createNewAxios("/user/activate/" + ref_id, "get");
    if (response.status === 200) {
      setData(true);
      localStorage.setItem("response", JSON.stringify(response.data));
    }
  };
  useEffect(() => {
    getActivation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data) {
    return <Navigate to={"/login"} />;
  } else {
    return <PageLoading />;
  }
}
