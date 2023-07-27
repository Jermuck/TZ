import { BadRequestException } from "@nestjs/common";
import { EmploeeEntity } from "@prisma/client";
import { UserAbstractReposiotory } from "src/domain/repositories/user-repository/user-repository.abstract";
import { ResultEmploeeUseCase } from "../response-data/response.interface";
import { EmploeeRegisterDto } from "src/infrastructure/controllers/auth/dto/emploee.register.dto";
import { UpdateEmploeeDto } from "src/infrastructure/controllers/emploee/dto/updateEmploee.dto";

export class EmploeeUseCase {
    constructor(
        private readonly userRepository: UserAbstractReposiotory
    ){};

    public async getAllEmploee(): Promise<EmploeeEntity[]> {
        const users = await this.userRepository.findManyWithJobTitleEmploee();
        return users;
    };

    public async deleteEmploee(arrayOfId: Array<string>): Promise<ResultEmploeeUseCase.IResultDeletId>{
        for(let id of arrayOfId){
            const isExistUser = await this.userRepository.getById(id);
            if(!isExistUser) throw new BadRequestException('Not found user');
            await this.userRepository.delete(id);
        };
        return {message: 'success'};
    };

    public async update(data: UpdateEmploeeDto): Promise<EmploeeEntity>{
        const isExistUser = await this.userRepository.getById(data.id);
        if(!isExistUser) throw new BadRequestException('Not found user');
        return await this.userRepository.updateFieldsWithUserId(data.id, {...data, jobTitle: 'EMPLOEE'});
    }
}