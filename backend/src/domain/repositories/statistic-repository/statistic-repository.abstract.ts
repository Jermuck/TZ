import { StatisticEmploee } from "@prisma/client";
import { StatisticModel } from "src/domain/models/Statistic.model";

export abstract class StatisticAbstractRepository {
    abstract create(data: StatisticModel): Promise<StatisticEmploee>;
    abstract findMany(): Promise<StatisticEmploee[]>;
}