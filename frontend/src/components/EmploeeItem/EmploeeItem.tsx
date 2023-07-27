import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IUser, IUserForTable } from '../../../types/index.types';
import { asyncGetEmploee } from './HttpHookForGetEmploee/http.hook';
import { Box } from '@mui/material';
import { useStore } from 'effector-react';
import { $user } from '../../store/UserStore/user.store';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 340 },
    {field: 'name', headerName: 'Name', width: 130},
    { field: 'surname', headerName: 'Surname', width: 130 },
    { field: 'patronymic', headerName: 'Patronymic', width: 130 },
    { field: 'salary', headerName: 'Salary', type: 'string', width: 130 },
    { field: 'dateBirthday', headerName: 'Date Birthday', type: 'date', width: 140 },
    { field: 'dateStartWork', headerName: 'Date Register', type: 'date', width: 140 },
    { field: 'password', headerName: 'authentication', type: 'boolean', width: 140 }
];

export function EmploeeItem() {
    const [users, setUsers] = React.useState<IUserForTable[]>([]);
    const user = useStore($user);
    async function getEmploee(){
        const emploess = await asyncGetEmploee();
        setUsers(emploess);
    };

    React.useEffect(() => {getEmploee()}, [])
    return (
        <Box width={'100%'} height={'100vh'} bgcolor={'white'}>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={user?.jobTitle === 'HR_MANAGER' ? true : false}
                onCellClick={el => console.log(el)}
            />
        </Box>
    );
}