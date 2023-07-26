import { Box, LinearProgress } from "@mui/material";
import { FC } from "react";

interface IInfoItemProps {
    title: string;
    value: string;
}

export const InfoItem:FC<IInfoItemProps> = ({title, value}) => (
    <Box width={'100%'} marginTop={2}>
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box
                color={'#9898B0'}
                fontSize={17}
            >{title}</Box>
            <Box
                color={'#E2E2E4'}
                fontSize={17}
            >{value}</Box>
        </Box>
        <LinearProgress style={{ height: 1.5, marginTop: 10 }} />
    </Box>
)