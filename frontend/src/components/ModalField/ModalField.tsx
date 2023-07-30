import { Box, TextField, Button } from "@mui/material"
import { FC, useState } from "react";
import { useUpdateEmploee } from "./HttpHookForUpdateEmploee/http.hook";
import { IUserForTable } from "../../types/index.types";

interface IModalField {
    data: IUserForTable;
    setModalOpen: (value: boolean) => void;
    setNewDateEmploee: (value: IUserForTable) => void;
}

export const ModalField:FC<IModalField> = ({
    data, setModalOpen, setNewDateEmploee
}) => {
    const [emploee, setEmploee] = useState<IUserForTable>(data);
    const {error, update} = useUpdateEmploee();

    async function submit(): Promise<void> {
        await update(emploee);
        setModalOpen(false);
        setNewDateEmploee(emploee);
    }

    return (
        <Box width={400} height={600} bgcolor={'#FFF'} borderRadius={6} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'}>
            <Box fontSize={20}>Change Fields</Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                <TextField error={error} label={'name'} size={'small'} style={{ width: '75%', marginTop: 20 }} value={emploee.name} onChange={e => setEmploee({ ...emploee, name: e.target.value })} />
                <TextField error={error} label={'surname'} size={'small'} style={{ width: '75%', marginTop: 20 }} value={emploee.surname} onChange={e => setEmploee({ ...emploee, surname: e.target.value })} />
                <TextField error={error} label={'patronymic'}  size={'small'} style={{ width: '75%', marginTop: 20 }} value={emploee.patronymic} onChange={e => setEmploee({ ...emploee, patronymic: e.target.value })} />
                <TextField error={error} size={'small'} type={'date'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, dateBirthday: new Date(e.target.value) })} />
                <TextField error={error} label={'salary'} size={'small'} type={'number'} style={{ width: '75%', marginTop: 20 }} value={emploee.salary} onChange={e => setEmploee({ ...emploee, salary: +e.target.value })} />
            </Box>
            <Button onClick={submit}>Submit</Button>

        </Box>
    )
}