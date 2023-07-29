import { Box, Button } from "@mui/material"
import { Theme } from "../../components/Theme/Theme"
import { useNavigate } from "react-router-dom"
import { SalaryChart } from "../../components/SalaryChart/SalaryChart";

export const ChartPage = () => {
    const nav = useNavigate();
    return (
        <Box color={'white'} height={'100vh'} width={'100%'}>
            <Box width={'100%'} height={60} bgcolor={'#252838'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontSize={25} color={'#FFFF'} marginLeft={15}>Statistic</Box>
                <Button style={{ background: '#343A4F', height: '60%', marginRight: 120 }} onClick={() => nav('/statistic')}>Back</Button>
            </Box>
            <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box width={1200} height={700}>
                    <SalaryChart />
                </Box>
            </div>
        </Box>
    )
}