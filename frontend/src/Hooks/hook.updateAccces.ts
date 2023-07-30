import { IUser } from "../../types/index.types";
import { AuthController } from "../http/controllers/AuthController/auth.controller";
import { setLoading } from "../store/LoadingStore/loading.store";
import { setUser } from "../store/UserStore/user.store"

export const setUpdateAccessToken = async (): Promise<IUser | undefined> => {
    try{
        const apiInstance = AuthController.getInstance();
        const {data} = await apiInstance.refresh()
        localStorage.setItem('access', data.data.access);
        setUser(data.data.user);
        return data.data.user;
    }catch(err){
        setUser(null);
        localStorage.removeItem('access')
    }
}