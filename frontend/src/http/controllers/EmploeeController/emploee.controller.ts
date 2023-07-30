import { AxiosResponse } from "axios";
import { ILogoutResponse, IResponseData, IUser } from "../../../types/index.types";
import { $api } from "../../config/http.config";
import { IEmploee } from "../../../components/ModalItems/ModalItems";

export class EmploeeController {
    static getInstance(){
        return new EmploeeController();
    };

    public async getEmploees(): Promise<AxiosResponse<IResponseData<IUser[]>>>{
        return await $api.get<IResponseData<IUser[]>>('/emploee');
    };

    public async deteleEmploees(arrayOfId: Array<string>): Promise<AxiosResponse<IResponseData<ILogoutResponse>>>{
        return await $api.post<IResponseData<ILogoutResponse>>('/emploee/delete', {arrayOfId});
    };

    public async updateEmploee(data: IEmploee): Promise<AxiosResponse<IResponseData<IUser>>>{
        return await $api.post<IResponseData<IUser>>('/emploee/update', data);
    };

}