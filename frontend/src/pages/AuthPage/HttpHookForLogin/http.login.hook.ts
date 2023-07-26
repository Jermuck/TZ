import { useState } from "react";
import { ILoginDtoUser } from "../../../../types/index.types";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";
import { setUser } from "../../../store/UserStore/user.store";

interface IErrorInput {
  key: keyof ILoginDtoUser;
  isError: boolean;
};

interface IUseLogin {
  login: (user: ILoginDtoUser) => Promise<void>;
  error: IErrorInput[];
}

export const useLogin = (): IUseLogin => {
  const [error, setError] = useState<IErrorInput[]>([
    { key: 'name', isError: false }, { key: 'surname', isError: false },
    { key: 'patronymic', isError: false }, { key: 'password', isError: false }
  ]);

  async function login(user: ILoginDtoUser): Promise<void> {
    try {
      const apiInstance = AuthController.getInstance();
      const { data } = await apiInstance.login(user);
      localStorage.setItem('access', data.data.access);
      setUser(data.data.user);
    } catch (err) {
      setError(prev => prev.map(el => {
        el.isError = true;
        return el;
      }));
      setTimeout(() => {
        setError(prev => prev.map(el => {
          el.isError = false;
          return el;
        })); 
      }, 400)
    }
  };

  return { login, error }
}
