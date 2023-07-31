import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useLogin } from "./HttpHookForLogin/http.login.hook";
import { Theme } from "../../components/Theme/Theme";

export const AuthPage = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [patronymic, setPatronymic] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {login, error} = useLogin();

  return (
    <Theme>
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
    >
      <Box width={400} height={600} bgcolor={'white'} borderRadius={6} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'}>
        <Box color={'black'} marginTop={2} fontSize={20}>Sign In</Box>
        <Box>
          <TextField label={'name'} size={'small'} error={error} style={{ width: '75%', marginTop: 20}} onChange={event => setName(event.target.value)}/>
          <TextField label={'lastname'} size={'small'} error={error} style={{ width: '75%', marginTop: 20 }} onChange={event => setSurname(event.target.value)} />
          <TextField label={'patronymic'} size={'small'} error={error} style={{ width: '75%', marginTop: 20 }} onChange={event => setPatronymic(event.target.value)} />
          <TextField label={'password'} type={'password'} error={error} size={'small'} style={{ width: '75%', marginTop: 20 }} onChange={event => setPassword(event.target.value)} />
        </Box>
        <Button 
          style={{ width: '75%' }}
          onClick={() => {login({name, surname, patronymic, password})}}
        >Confirm</Button>
      </Box>
    </Box>
    </Theme>
  )
}
