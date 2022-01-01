import { Button, CircularProgress } from "@mui/material"

export default function LoadingButton(){
    return(
        <Button size="large" fullWidth variant="contained" color="info"><CircularProgress sx={{color: "white"}}/></Button>
    )
}