import { StatusEmploee } from "@prisma/client";

export class StatisticModel {
    public emploeeId: string;
    public time: Date;
    public type: StatusEmploee;
}