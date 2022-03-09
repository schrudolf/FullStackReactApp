import { Button, CircularProgress } from "@mui/material"

export default function LoadingButton(){
    return(
        <Button size="small" className="loadingButton" fullWidth variant="contained"><CircularProgress sx={{color: "white"}}/></Button>
    )
}