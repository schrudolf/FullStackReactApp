import * as actionCreators from "./index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";


export default function GetAllActionCreators(){
    const dispatch = useDispatch();
    const AC = bindActionCreators(actionCreators, dispatch);
    return AC;
}


