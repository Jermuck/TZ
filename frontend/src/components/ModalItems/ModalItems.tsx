import { Box, Button, TextField} from "@mui/material"
import { FC, useState } from "react";
import { useCreateEmploee } from "./HttpForCreateEmploee/http.hook";
import { IMessage } from "../../pages/HomePage/HomePage";

export interface IEmploee {
    name: string;
    surname: string;
    patronymic: string;
    dateBirthday: Date | string
    salary: number;
};

interface IModalItems{
    setModal: (value: boolean) => void;
    setMessage: (target: IMessage) => void;
}

export const ModalItems: FC<IModalItems> = ({setModal, setMessage}) => {
    const [emploee, setEmploee] = useState<IEmploee>({} as IEmploee);
    const { error, create } = useCreateEmploee();

    async function createEmploee(){
        const linkId = await create(emploee);
        if(!linkId) return;
        const link = `http://localhost:3000/${linkId}`;
        setMessage({isOpen: true, value: link});
        setModal(false);
    }
    return (
        <Box width={400} height={600} bgcolor={'white'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'} borderRadius={6}>
            <Box color={'black'} fontSize={20} >Create Emploee</Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                <TextField label={'name'} error={error} size={'small'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, name: e.target.value })} />
                <TextField label={'surname'} error={error} size={'small'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, surname: e.target.value })} />
                <TextField label={'patronymic'} error={error} size={'small'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, patronymic: e.target.value })} />
                <TextField size={'small'} error={error} type={'date'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, dateBirthday: new Date(e.target.value) })} />
                <TextField label={'salary'} error={error} size={'small'} type={'number'} style={{ width: '75%', marginTop: 20 }} onChange={e => setEmploee({ ...emploee, salary: +e.target.value })} />
            </Box>
            <Button onClick={createEmploee}>Submit</Button>
        </Box>
    )
}