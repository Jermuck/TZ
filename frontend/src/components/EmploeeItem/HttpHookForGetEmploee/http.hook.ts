import { IUser, IUserForTable } from "../../../../types/index.types";
import { EmploeeController } from "../../../http/controllers/EmploeeController/EmplooeController";

export const asyncGetEmploee = async (): Promise<IUserForTable[]> => {
    try{
        const apiIsntance = EmploeeController.getInstance();
        const {data} = await apiIsntance.getEmploees();
        return data.data.map(el => 
            ({  ...el, 
                dateStartWork: new Date(el.dateStartWork),
                dateBirthday: new Date(el.dateBirthday),
                password: el.password ? true : false
            }));
    }catch(err){
        console.log(err);
        return [];
    }
}