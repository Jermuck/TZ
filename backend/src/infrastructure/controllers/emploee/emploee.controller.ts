import { Controller, Get, HttpCode, Inject, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/infrastructure/common/guards/auth.guard";
import { EmploeeUseCaseModule } from "src/use-cases/emploee-usecases/emploee.usecases-proxy";
import { EmploeeUseCase } from "src/use-cases/emploee-usecases/usecase-blocks/emploee.usecase";

@Controller('/emploee')
export class EmploeeController {
    constructor(
        @Inject(EmploeeUseCaseModule.EMPLOEE_USECASE)
        private readonly EmploeeUseCaseInstance: EmploeeUseCase
    ){};

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard)
    public async getAll(){
        return await this.EmploeeUseCaseInstance.getAllEmploee();

    }
}