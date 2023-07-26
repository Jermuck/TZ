import { AuthController } from "../http/controllers/AuthController/auth.controller";
import { setUser } from "../store/UserStore/user.store"

export const setUpdateAccessToken = async (): Promise<void> => {
    try{
        const token = localStorage.getItem('access');
        if(!token) return;
        const apiInstance = AuthController.getInstance();
        const {data} = await apiInstance.refresh()
        localStorage.setItem('access', data.data.access);
        setUser(data.data.user);
    }catch(err){
        setUser(null);
        localStorage.removeItem('access')
    }
}