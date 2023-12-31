import { EmploeeController } from "../../../http/controllers/EmploeeController/emploee.controller"

export const asyncDeleteEmploee = async (payload: Array<string>): Promise<Array<string>> => {
    try{
        const apiInstance = EmploeeController.getInstance();
        await apiInstance.deteleEmploees(payload);
        return payload;
    }catch(err){
        console.log(err);
        return [];
    }
}