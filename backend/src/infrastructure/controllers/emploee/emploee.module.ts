import { Module } from "@nestjs/common";
import { EmploeeController } from "./emploee.controller";
import { EmploeeUseCaseModule } from "src/use-cases/emploee-usecases/emploee.usecases-proxy";
import { JwtAdapterModule } from "src/infrastructure/services/jwt/jwt.module";

@Module({
    controllers:[EmploeeController],
    imports: [EmploeeUseCaseModule.regiter(), JwtAdapterModule]
})
export class EmploeeModule{}