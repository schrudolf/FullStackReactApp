export const setLoggedStatus = (isLogged) => {
    return (dispatch) => {
        dispatch({
            type: "LOGGED",
            payload: isLogged
        })
    }
}