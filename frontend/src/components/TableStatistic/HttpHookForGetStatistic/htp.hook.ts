import { StatisticController } from "../../../http/controllers/StatisticController/statistic.controller";
import { setLoading } from "../../../store/LoadingStore/loading.store";
import { ITableStatistic } from "../TableStatistic";

export const asyncGetStatistic = async (): Promise<ITableStatistic[]> => {
    try{
        const apiInstance = StatisticController.getInstance();
        const {data} = await apiInstance.getStatistic();
        return data.data; 
    }catch(err){
        console.log(err)
        return [];
    }
}