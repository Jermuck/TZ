import { Injectable } from "@nestjs/common";
import { StatisticEmploee, StatusEmploee } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime";
import { StatisticModel } from "src/domain/models/Statistic.model";
import { StatisticAbstractRepository } from "src/domain/repositories/statistic-repository/statistic-repository.abstract";
import { PrismaService } from "src/infrastructure/config/prisma.config";

@Injectable()
export class StatisticRepository implements StatisticAbstractRepository{
    constructor(
        private readonly prisma: PrismaService
    ){};
    
    public async create(data: StatisticModel): Promise<StatisticEmploee> {
        return await this.prisma.statisticEmploee.create({
            data: data
        });
    };

    public async findMany(): Promise<StatisticEmploee[]> {
        return await this.prisma.statisticEmploee.findMany();
    };
}