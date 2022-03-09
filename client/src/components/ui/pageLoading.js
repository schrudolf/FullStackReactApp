import loadingGif from "../../assets/img/loading.gif";
import "./pageLoading.css";

export default function PageLoading() {
  return (
    <div className="loading">
      <img className="pageLoading" src={loadingGif} alt="Loading.." />
    </div>
  );
}
