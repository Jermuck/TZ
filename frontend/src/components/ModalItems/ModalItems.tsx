import { Box, TextField } from "@mui/material"

export const ModalItems = () => {
    return (
        <Box width={400} height={600} bgcolor={'white'} display={'flex'} alignItems={'center'} flexDirection={'column'} borderRadius={6}>
            <Box color={'#FFF'} fontSize={20} marginTop={5}>Create Emploee</Box>
            <TextField label={'name'} size={'small'}  style={{ width: '75%', marginTop: 20 }} />
            <TextField label={'name'} size={'small'}  style={{ width: '75%', marginTop: 20 }} />
        </Box>
    )
}