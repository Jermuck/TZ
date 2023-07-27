import { Box, Button } from "@mui/material"
import { Theme } from "../../components/Theme/Theme"
import { useNavigate } from "react-router-dom"
import { EmploeeItem } from "../../components/EmploeeItem/EmploeeItem";

export const EmploeePage = () => {
    const nav = useNavigate();
    return(
        <Theme>
            <Box width={'100%'} height={60} bgcolor={'#252838'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontSize={25} color={'#FFFF'} marginLeft={15}>Statistic</Box>
                <Box width={'20%'} display={'flex'} justifyContent={'space-between'} marginRight={15}>
                    <Button style={{ background: '#343A4F', height: '60%' }} onClick={() => nav('/home')}>Back</Button>
                    <Button style={{ background: '#343A4F', height: '60%' }}>Metric</Button>
                </Box>
            </Box>
            <EmploeeItem/>
        </Theme>
    )
}