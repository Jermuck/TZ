import { Box, Button } from "@mui/material"
import { Theme } from "../../components/Theme/Theme"
import { useNavigate } from "react-router-dom"
import { TableStatistic } from "../../components/TableStatistic/TableStatistic"
import { EmploeeTable } from "../../components/EmploeeTable/EmploeeTable"
import { useEffect, useState } from "react"
import { IUserForTable } from "../../../types/index.types"
import { asyncGetEmploee } from "../EmploeePage/HttpHookForGetEmploee/http.hook"

export const MetricPage = () => {
    const nav = useNavigate();
    const [data, setData] = useState<IUserForTable[]>([]);
    async function getData() {
        const users = await asyncGetEmploee();
        setData(users.filter(emploee => emploee.dateBirthday.getMonth() === (new Date()).getMonth()));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Theme>
            <Box width={'100%'} height={60} bgcolor={'#252838'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontSize={25} color={'#FFFF'} marginLeft={15}>Statistic</Box>
                <Box width={'25%'} display={'flex'} justifyContent={'space-beetwen'}>
                <Button style={{ background: '#343A4F', height: '60%', marginRight: 120 }} onClick={() => nav('/statistic')}>Back</Button>
                <Button style={{ background: '#343A4F', height: '60%', marginRight: 120 }} onClick={() => nav('/charts')}>Chart</Button>
                </Box>
            </Box>
            <Box width={'100%'} height={'100vh'} bgcolor={'white'}>
                <TableStatistic />
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Box fontSize={20} marginTop={2}>Birthday Statistic</Box>
                    <EmploeeTable users={data} isCheckBox={false} mgTop={2} width={'97%'} height={400}/>
                </Box>
            </Box>
        </Theme>
    )
}