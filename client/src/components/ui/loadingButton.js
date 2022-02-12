import { Button, CircularProgress } from "@mui/material"

export default function LoadingButton(){
    return(
        <Button size="medium" fullWidth variant="contained" color="error"><CircularProgress sx={{color: "white"}}/></Button>
    )
}