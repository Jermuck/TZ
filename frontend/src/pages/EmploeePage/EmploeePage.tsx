import { Box, Button, Modal } from "@mui/material"
import { Theme } from "../../components/Theme/Theme"
import { useNavigate } from "react-router-dom"
import { EmploeeItem } from "../../components/EmploeeItem/EmploeeItem";
import { useEffect, useState } from "react";
import { IUserForTable } from "../../../types/index.types";
import { asyncGetEmploee } from "./HttpHookForGetEmploee/http.hook";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useStore } from "effector-react";
import { $user } from "../../store/UserStore/user.store";
import { asyncDeleteEmploee } from "../../components/EmploeeItem/HttpHookForDeleteEmploee/http.hook";
import { ModalField } from "../../components/ModalField/ModalField";
import { IEmploee } from "../../components/ModalItems/ModalItems";

export const EmploeePage = () => {
    const nav = useNavigate();
    const user = useStore($user);
    const [isShowDeleteButton, setIsShowDeleteButton] = useState<boolean>(false);
    const [isShowChangeButton, setIsShowChangeButton] = useState<boolean>(false);
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [users, setUsers] = useState<IUserForTable[]>([]);
    const [deleteEmploee, setDeleteEmploee] = useState<string[]>([]);
    const [updateObject, setUpdateObject] = useState<IUserForTable>({} as IUserForTable);

    useEffect(() => {
        if(deleteEmploee.length > 1) {
            setIsShowDeleteButton(true);
            setIsShowChangeButton(false);
            return;
        }
        if(deleteEmploee.length === 1){
            setIsShowDeleteButton(true);
            setIsShowChangeButton(true);
            return;
        }
        else {
            setIsShowDeleteButton(false);
            setIsShowChangeButton(false);
        }
    }, [deleteEmploee])

    async function getEmploee(){
        const emploees = await asyncGetEmploee();
        setUsers(emploees);
    }

    async function onDelete(): Promise<void>{
        const data = await asyncDeleteEmploee(deleteEmploee);
        setUsers(prev => prev.filter(el => !data.includes(el.id)));
    }

    function setEmploee(value: GridRowSelectionModel){
        //@ts-ignore
        setDeleteEmploee(value);
        const emploee = users.find(el => el.id === value.at(-1));
        if(!emploee) return;
        setUpdateObject(emploee);
    };

    function setUpdateDateToEmploee(payload: IUserForTable) {
        setUsers(prev => prev.map(el => {
            if(el.id === payload.id) return payload;
            return el;
        }))
    }

    useEffect(() => {getEmploee()}, []);

    return(
        <Theme>
            <Modal open={isShowModal} onClose={() => setIsShowModal(false)} style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <ModalField data={updateObject} setModalOpen={value => setIsShowModal(value)} setNewDateEmploee={setUpdateDateToEmploee}/>
            </Modal>
            <Box width={'100%'} height={60} bgcolor={'#252838'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontSize={25} color={'#FFFF'} marginLeft={15}>Statistic</Box>
                <Box width={!isShowChangeButton ? '20%': '30%'} display={'flex'} justifyContent={'space-between'} marginRight={15}>
                    {(isShowDeleteButton && user?.jobTitle === 'HR_MANAGER') &&  <Button style={{ background: '#343A4F', height: '60%' }} onClick={onDelete}>Delete</Button>}
                    {(isShowChangeButton && user?.jobTitle === 'HR_MANAGER') &&  <Button style={{ background: '#343A4F', height: '60%' }} onClick={() => setIsShowModal(true)}>Change</Button>}
                    <Button style={{ background: '#343A4F', height: '60%' }} onClick={() => nav('/home')}>Back</Button>
                    <Button style={{ background: '#343A4F', height: '60%' }}>Metric</Button>
                </Box>
            </Box>
            <EmploeeItem setDeleteEmploee={setEmploee} users={users}/>
        </Theme>
    )
}