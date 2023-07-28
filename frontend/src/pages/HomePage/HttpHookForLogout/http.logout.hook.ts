import { useNavigate } from "react-router-dom";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller"
import { setUser } from "../../../store/UserStore/user.store";
import { setLoading } from "../../../store/LoadingStore/loading.store";

export const useLogout = (): () => Promise<void> => {
    const nav = useNavigate();
    async function logout():Promise<void> {
        try {
            setLoading(true)
            const apiInstance = AuthController.getInstance();
            await apiInstance.logout();
            localStorage.removeItem('access');
            setUser(null);
            setLoading(false)
            nav('/auth');
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    };

    return logout;
}