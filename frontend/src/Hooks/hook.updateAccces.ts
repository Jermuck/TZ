import { IUser } from "../types/index.types";
import { AuthController } from "../http/controllers/AuthController/auth.controller";
import { setUser } from "../store/UserStore/user.store"

export const setUpdateAccessToken = async (): Promise<IUser | null> => {
    try{
        const apiInstance = AuthController.getInstance();
        const {data} = await apiInstance.refresh()
        localStorage.setItem('access', data.data.access);
        setUser(data.data.user);
        return data.data.user;
    }catch(err){
        setUser(null);
        localStorage.removeItem('access')
        return null;
    }
}