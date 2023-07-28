import { EmploeeController } from "../../../http/controllers/EmploeeController/emploee.controller"
import { setLoading } from "../../../store/LoadingStore/loading.store";

export const asyncDeleteEmploee = async (payload: Array<string>): Promise<Array<string>> => {
    try{
        setLoading(true)
        const apiInstance = EmploeeController.getInstance();
        await apiInstance.deteleEmploees(payload);
        setLoading(false)
        return payload;
    }catch(err){
        setLoading(false)
        console.log(err);
        return [];
    }
}