import { AuthController } from "../http/controllers/AuthController/auth.controller";
import { setLoading } from "../store/LoadingStore/loading.store";
import { setUser } from "../store/UserStore/user.store"

export const setUpdateAccessToken = async (): Promise<void> => {
    try{
        const token = localStorage.getItem('access');
        if(!token) return;
        setLoading(true)
        const apiInstance = AuthController.getInstance();
        const {data} = await apiInstance.refresh()
        localStorage.setItem('access', data.data.access);
        setUser(data.data.user);
        setLoading(false)
    }catch(err){
        setLoading(false)
        setUser(null);
        localStorage.removeItem('access')
    }
}