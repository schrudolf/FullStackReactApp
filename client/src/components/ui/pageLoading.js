import loadingGif from "../../assets/img/loading.gif"

export default function PageLoading(){
    return(
        <img src={loadingGif} style={{position: "absolute", top: "50%", left: "50%", margin: "-100px 0 0 -150px"}} alt="Loading.." />
    )
}