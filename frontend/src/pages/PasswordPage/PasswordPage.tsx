import { Box, Button, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useValidateLink } from "./HttpHookForValidateLink/http.hook";
import { Theme } from "../../components/Theme/Theme";
import { useCreatePassword } from "./HttpHookForCreatePassword/http.hook";

export const PasswordPage = () => {
    const { linkId } = useParams<'linkId'>();
    const validateLink = useValidateLink();
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const { error, createPassword } = useCreatePassword();

    useEffect(() => {
        if (!linkId) return
        validateLink(linkId);
    });

    return (
        <Theme>
            <Box width={'100%'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={400} height={300} bgcolor={'white'} borderRadius={6} display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}>
                    <Box fontSize={20} color={'black'}>Authorization</Box>
                    <TextField label={'password'} error={error} size={'small'} style={{ width: '75%' }} onChange={e => setPassword(e.target.value)} />
                    <TextField label={'repeat password'} error={error} size={'small'} style={{ width: '75%' }} onChange={e => setRepeatPassword(e.target.value)} />
                    <Button onClick={() => createPassword({ linkId, password, repeatPassword })}>Submit</Button>
                </Box>
            </Box>
        </Theme>
    )
}