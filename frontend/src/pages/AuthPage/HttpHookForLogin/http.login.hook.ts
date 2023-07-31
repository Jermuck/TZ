import { useState } from "react";
import { ILoginDtoUser } from "../../../types/index.types";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";
import { setUser } from "../../../store/UserStore/user.store";
import { useNavigate } from "react-router-dom";

interface IUseLogin {
  login: (user: ILoginDtoUser) => Promise<void>;
  error: boolean;
}

export const useLogin = (): IUseLogin => {
  const [error, setError] = useState<boolean>(false);
  const nav = useNavigate()

  async function login(user: ILoginDtoUser): Promise<void> {
    try {
      const apiInstance = AuthController.getInstance();
      const { data } = await apiInstance.login(user);
      localStorage.setItem('access', data.data.access);
      setUser(data.data.user);
      nav('/home')
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 400)
    }
  };

  return { login, error }
}
