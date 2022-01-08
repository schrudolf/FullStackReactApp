import {useEffect} from "react";
import { Navigate } from "react-router-dom";
import createNewAxios from "../../../axios/axios";
import AC from "../../../redux/action-creators/bindActionCreators";

export default function AppLogout(){
    const actionCreators = AC();
    async function userLogout(){
        const response = await createNewAxios("/app/logout", "get");
        if(response.status === 200){
                actionCreators.setLoggedStatus(false);
        }
    }
    useEffect(() => {
        userLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <Navigate to="/login" />
}