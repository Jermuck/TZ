import { useNavigate } from "react-router-dom"
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";

type AsyncValidateLinkId = (linkId: string) => Promise<string | undefined>;

export const useValidateLink = (): AsyncValidateLinkId => {
    const nav = useNavigate();
    async function validateLink(linkId: string): Promise<string | undefined> {
        try{
            const apiInstance = AuthController.getInstance();
            const {data} = await apiInstance.validateLink(linkId);
            return data.data.message;
        }catch(err){
            nav('/auth');
            return;
        }
    };

    return validateLink
}