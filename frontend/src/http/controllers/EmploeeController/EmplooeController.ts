import { AxiosResponse } from "axios";
import { IResponseData, IUser } from "../../../../types/index.types";
import { $api } from "../../config/http.config";

export class EmploeeController {
    static getInstance(){
        return new EmploeeController();
    };

    public async getEmploees(): Promise<AxiosResponse<IResponseData<IUser[]>>>{
        return await $api.get<IResponseData<IUser[]>>('/emploee/');
    };
}