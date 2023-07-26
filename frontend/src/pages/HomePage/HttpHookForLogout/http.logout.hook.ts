import { useNavigate } from "react-router-dom";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller"
import { setUser } from "../../../store/UserStore/user.store";

export const useLogout = (): () => Promise<void> => {
    const nav = useNavigate();
    async function logout():Promise<void> {
        try {
            const apiInstance = AuthController.getInstance();
            await apiInstance.logout();
            localStorage.removeItem('access');
            setUser(null);
            nav('/auth');
        } catch (err) {
            console.log(err);
        }
    };

    return logout;
}