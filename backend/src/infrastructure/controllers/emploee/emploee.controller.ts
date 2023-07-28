import { Body, Controller, Get, HttpCode, Inject, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/infrastructure/common/guards/auth.guard";
import { JobTitleGuard } from "src/infrastructure/common/guards/jobTitle.guard";
import { EmploeeUseCaseModule } from "src/use-cases/emploee-usecases/emploee.usecases-proxy";
import { EmploeeUseCase } from "src/use-cases/emploee-usecases/usecase-blocks/emploee.usecase";
import { DeleteEmploeeDto } from "./dto/deleteEmploee.dto";
import { UpdateEmploeeDto } from "./dto/updateEmploee.dto";

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
    };

    @Post('/delete')
    @HttpCode(200)
    @UseGuards(JobTitleGuard)
    public async delete(@Body() dto: DeleteEmploeeDto) {
        return await this.EmploeeUseCaseInstance.deleteEmploee(dto.arrayOfId);
    };

    @Post('/update')
    @HttpCode(200)
    @UseGuards(JobTitleGuard)
    public async update(@Body( new ValidationPipe({whitelist: true})) dto: UpdateEmploeeDto){
        return await this.EmploeeUseCaseInstance.update(dto);
    };
}