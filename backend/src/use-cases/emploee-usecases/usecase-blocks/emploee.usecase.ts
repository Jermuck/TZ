import { EmploeeEntity } from "@prisma/client";
import { UserAbstractReposiotory } from "src/domain/repositories/user-repository/user-repository.abstract";

export class EmploeeUseCase {
    constructor(
        private readonly userRepository: UserAbstractReposiotory
    ){};

    public async getAllEmploee(): Promise<EmploeeEntity[]> {
        const users = await this.userRepository.findManyWithJobTitleEmploee();
        return users;
    }
}