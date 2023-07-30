import { AxiosResponse } from "axios";
import { IResponseData } from "../../../types/index.types";
import { ITableStatistic } from "../../../components/TableStatistic/TableStatistic";
import { $api } from "../../config/http.config";

export class StatisticController {
    static getInstance(){
        return new StatisticController()
    };

    public async getStatistic(): Promise<AxiosResponse<IResponseData<ITableStatistic[]>>>{
        return await $api.get<IResponseData<ITableStatistic[]>>('/statistic');
    };
}