import { IUserForTable } from "../../../../types/index.types";
import { EmploeeController } from "../../../http/controllers/EmploeeController/emploee.controller";
import { setLoading } from "../../../store/LoadingStore/loading.store";

export const asyncGetEmploee = async (): Promise<IUserForTable[]> => {
    try{
        setLoading(true)
        const apiIsntance = EmploeeController.getInstance();
        const {data} = await apiIsntance.getEmploees();
        setLoading(false)
        return data.data.map(el => 
            ({  ...el, 
                dateStartWork: new Date(el.dateStartWork),
                dateBirthday: new Date(el.dateBirthday),
                password: el.password ? true : false
            }));
    }catch(err){
        setLoading(false)
        console.log(err);
        return [];
    }
}