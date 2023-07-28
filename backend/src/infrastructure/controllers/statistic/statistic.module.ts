import { Module } from "@nestjs/common";
import { EmploeeUseCaseModule } from "src/use-cases/emploee-usecases/emploee.usecases-proxy";
import { StatisticController } from "./statistic.controller";
import { JwtAdapterModule } from "src/infrastructure/services/jwt/jwt.module";

@Module({
    imports:[
        EmploeeUseCaseModule.regiter(),
        JwtAdapterModule
    ],
    controllers: [StatisticController]
})
export class StatisticModule{}