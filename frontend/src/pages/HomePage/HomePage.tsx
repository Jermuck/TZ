import { Box, Button, LinearProgress, Modal } from "@mui/material"
import { useStore } from "effector-react"
import { $user } from "../../store/UserStore/user.store";
import { Theme } from "../../components/Theme/Theme";
import { InfoItem } from "../../UI/InfoItem/InfoItem";
import { useLogout } from "./HttpHookForLogout/http.logout.hook";
import { useState } from "react";
import { ModalItems } from "../../components/ModalItems/ModalItems";

export const HomePage = () => {
    const user = useStore($user);
    const logout = useLogout();
    const [isOpen, setModalOpen] = useState<boolean>(false);

    return (
        <Theme>
            <Modal open={isOpen} onClose={() => setModalOpen(false)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ModalItems/>
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
                    <InfoItem title={'Salary'} value={user ? user?.salary.toString() : ''} />
                </Box>
            </Box>
        </Theme>
    )
}