import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { asyncGetStatistic } from "./HttpHookForGetStatistic/htp.hook";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 130},
    { field: 'type', headerName: 'Type column', width: 130 },
    { field: 'mounth', headerName: 'This mounth', width: 130 },
    { field: 'year', headerName: 'This year', width: 130 }
];

export interface ITableStatistic {
    id: number;
    type: string;
    mounth: number;
    year: number;
}

export const TableStatistic = () => {
    const [data, setData] = useState<ITableStatistic[]>([]);

    async function getStatistic() {
        const payload = await asyncGetStatistic();
        setData(payload);
    }
    
    useEffect(() => {
        getStatistic()
    }, []);

    return (
        <Box  width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} bgcolor={'white'}>
            <Box color={'black'} fontSize={20} marginTop={2}>Work emploee</Box>
            <DataGrid
                rows={data}
                columns={columns}
                style={{borderRadius: 5, background: 'white', width: '97%', marginTop: 16, height: 100}}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick={true}
                checkboxSelection={false}
            />
        </Box>
    )
}