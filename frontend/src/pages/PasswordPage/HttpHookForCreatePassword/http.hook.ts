import { useState } from "react";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";
import { setUser } from "../../../store/UserStore/user.store";

interface ICreateDataPassword {
    linkId: string | undefined;
    password: string;
    repeatPassword: string;
};

interface IUserCreatePassword {
    error: boolean;
    createPassword: (data: ICreateDataPassword) => Promise<void>;
}

export const useCreatePassword = (): IUserCreatePassword => {
    const [error, setError] = useState<boolean>(false);

    function showError(): void{
        setError(true);
        setTimeout(() => setError(false), 400);
    };

    function validate(password: string, repeatPassword: string): boolean {
        if(password.length === 0 || repeatPassword.length === 0) return false;
        return password === repeatPassword;
    }

    async function createPassword(passwordData: ICreateDataPassword): Promise<void> {
        try{
            const {linkId, password, repeatPassword} = passwordData;
            if(!validate(password, repeatPassword) || !linkId)  {
                showError();
                return;
            }
            const apiInstance = AuthController.getInstance();
            const {data} = await apiInstance.createPassword(linkId, password);
            setUser(data.data.user);
            localStorage.setItem('access', data.data.access);
        }catch(err){
            showError();
        }
    };

    return {createPassword, error};
}