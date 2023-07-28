import { Box, CircularProgress,  } from "@mui/material"

export const Loading = () => {
    return(
        <Box width={'100%'} height={'100vh'} bgcolor={'#343A4F'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress/>
        </Box>
    )
}