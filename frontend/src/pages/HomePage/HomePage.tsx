import { Alert, Box, Button, LinearProgress, Modal, Snackbar } from "@mui/material"
import { useStore } from "effector-react"
import { $user } from "../../store/UserStore/user.store";
import { Theme } from "../../components/Theme/Theme";
import { InfoItem } from "../../UI/InfoItem/InfoItem";
import { useLogout } from "./HttpHookForLogout/http.logout.hook";
import { useState } from "react";
import { ModalItems } from "../../components/ModalItems/ModalItems";
import { $message, setMessage } from "../../store/MessageStore/message.store";

export const HomePage = () => {
    const user = useStore($user);
    const message = useStore($message);
    const logout = useLogout();
    const [isOpen, setModalOpen] = useState<boolean>(false);

    function convertTime(date: Date): string {
        const day = date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate().toString();
        const mounth = date.getMonth().toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
        return `${day}.${mounth}.${date.getFullYear()}`;
    }
    return (
        <Theme>
            <Snackbar open={message.isOpen}>
                <Alert severity="success" sx={{ width: '100%' }} onClose={() => setMessage({ isOpen: false, value: '' })}>
                    This is link for emploee: {message.value}!
                </Alert>
            </Snackbar>
            <Modal open={isOpen} onClose={() => setModalOpen(false)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ModalItems setModal={val => setModalOpen(val)} />
            </Modal>
            <Box width={'100%'} height={60} bgcolor={'#252838'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontSize={25} color={'#FFFF'} marginLeft={15}> Home</Box>
                <Box width={'35%'} display={'flex'} justifyContent={'space-between'} marginRight={15}>
                    <Button style={{ background: '#343A4F', height: '60%' }} onClick={logout}>Logout</Button>
                    <Button style={{ background: '#343A4F', height: '60%' }} >Statistic</Button>
                    <Button style={{ background: '#343A4F', height: '60%' }} onClick={() => setModalOpen(true)}>Create Emploee</Button>
                </Box>
            </Box>
            <Box height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box fontSize={25} color={'#FFFF'}>Information</Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'30%'} marginTop={10}>
                    <InfoItem title={'Name'} value={user ? user?.name : ''} />
                    <InfoItem title={'Surname'} value={user ? user?.surname : ''} />
                    <InfoItem title={'Patronymic'} value={user ? user?.patronymic : ''} />
                    <InfoItem title={'Type'} value={user ? user?.jobTitle : ''} />
                    {user?.jobTitle !== 'HR_MANAGER' && <InfoItem title={'Salary'} value={user ? user?.salary?.toString() : ''} />}
                    <InfoItem title={'Birthday'} value={user ? convertTime(new Date(user.dateBirthday)) : ''} />
                </Box>
            </Box>
        </Theme>
    )
}