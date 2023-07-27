import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { useStore } from 'effector-react';
import { $user } from './store/UserStore/user.store';
import { HomePage } from './pages/HomePage/HomePage';
import { useEffect } from 'react';
import { setUpdateAccessToken } from './Hooks/hook.updateAccces';
import { PasswordPage } from './pages/PasswordPage/PasswordPage';

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
          <Route path={'/home'} element={user ? <HomePage /> : <Navigate to={'/'}/>} />
          <Route path='/:linkId' element={user ? <HomePage/> : <PasswordPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
