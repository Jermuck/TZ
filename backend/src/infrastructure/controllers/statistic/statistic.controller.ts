import { Controller, Get, HttpCode, Inject, UseGuards } from "@nestjs/common";
import { JobTitleGuard } from "src/infrastructure/common/guards/jobTitle.guard";
import { EmploeeUseCaseModule } from "src/use-cases/emploee-usecases/emploee.usecases-proxy";
import { EmploeeUseCase } from "src/use-cases/emploee-usecases/usecase-blocks/emploee.usecase";

@Controller('/statistic')
export class StatisticController{
    constructor(
        @Inject(EmploeeUseCaseModule.EMPLOEE_USECASE)
        private readonly emploeeUseCaseInstance: EmploeeUseCase
    ){};


    @Get()
    @HttpCode(200)
    @UseGuards(JobTitleGuard)
    public async getStatistic(){
        return await this.emploeeUseCaseInstance.getStatistics();
    }
}