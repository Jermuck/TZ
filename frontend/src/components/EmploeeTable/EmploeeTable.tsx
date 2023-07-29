import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { IUserForTable } from '../../../types/index.types';
import { Box } from '@mui/material';
import { useStore } from 'effector-react';
import { $user } from '../../store/UserStore/user.store';
import { FC } from 'react';

interface IEmploeeItem {
    users: IUserForTable[];
    isCheckBox: boolean;
    setDeleteEmploee?: (array: GridRowSelectionModel) => void;
    mgTop?: number;
    width?: string | number;
    height?: string | number;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 340 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'surname', headerName: 'Surname', width: 130 },
    { field: 'patronymic', headerName: 'Patronymic', width: 130 },
    { field: 'salary', headerName: 'Salary', type: 'string', width: 130 },
    { field: 'dateBirthday', headerName: 'Date Birthday', type: 'date', width: 140 },
    { field: 'dateStartWork', headerName: 'Date Register', type: 'date', width: 140 },
    { field: 'password', headerName: 'authentication', type: 'boolean', width: 140 },
];

export const EmploeeTable: FC<IEmploeeItem> = ({
    users, setDeleteEmploee, isCheckBox, mgTop = 0, width = '100%', height = '100%'
}) => {
    const user = useStore($user);

    return (
            <Box width={width} height={height} bgcolor={'white'} marginTop={mgTop} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 15]}
                    disableRowSelectionOnClick={true}
                    checkboxSelection={(user?.jobTitle === 'HR_MANAGER' && isCheckBox) ? true : false}
                    onRowSelectionModelChange={setDeleteEmploee}
                />
            </Box>
    );
}