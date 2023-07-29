import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { useStore } from 'effector-react';
import { $user } from './store/UserStore/user.store';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect } from 'react';
import { setUpdateAccessToken } from './Hooks/hook.updateAccces';
import { PasswordPage } from './pages/PasswordPage/PasswordPage';
import { EmploeePage } from './pages/EmploeePage/EmploeePage';
import { MetricPage } from './pages/MetricPage/MetricPage';
import {ChartPage} from './pages/ChartPage/ChartPage';

function App() {
  const user = useStore($user);
  useEffect(() => {
    setUpdateAccessToken()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={user ? <Navigate to={'/home'}/> : <Navigate to={'/auth'}/>}/>
          <Route path={'/auth'} element={user ? <Navigate to={'/home'}/> : <AuthPage />}/>
          <Route path={'/home'} element={user ? <HomePage /> : <Navigate to={'/auth'}/>} />
          <Route path={'statistic'} element={user ? <EmploeePage/> : <Navigate to={'/auth'}/>}/>
          <Route path={'/:linkId'} element={user ? <Navigate to={'/home'}/> : <PasswordPage/>}/>
          <Route path={'/metric'} element={(user?.jobTitle === 'HR_MANAGER') ? <MetricPage/> : <Navigate to={'/home'}/>}/>
          <Route path={'/charts'} element={user?.jobTitle === 'HR_MANAGER' ? <ChartPage/> : <div></div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
