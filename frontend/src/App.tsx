import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { useStore } from 'effector-react';
import { $user } from './store/UserStore/user.store';
import { useEffect, useState } from 'react';
import { setUpdateAccessToken } from './Hooks/hook.updateAccces';
import { IUser } from '../types/index.types';
import { IRouter, getEmploeeRoutes, getHrRoutes, getNotLoginEmploee } from './Routes/index.routes';


const GlobalRouter = () => {
  const [routes, setRoutes] = useState<IRouter[]>([]);
  const user = useStore($user);
  useEffect(() => {
    setUpdateAccessToken().then(value => {
      return value;
    }).then(value => {
      if(value?.jobTitle === 'HR_MANAGER'){
        setRoutes(getHrRoutes(value));
        return;
      };
      if(value?.jobTitle === 'EMPLOEE'){
        setRoutes(getEmploeeRoutes());
        return;
      }
      setRoutes(getNotLoginEmploee(value));
    })
  }, [user]);
  return (
    <Routes>
      {
        routes.map(el => <Route path={el.path} element={el.element} key={el.path}/>)
      }
    </Routes>
  )
}

function App() {

  useEffect(() => {
    setUpdateAccessToken()
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
