import { BadRequestException } from "@nestjs/common";
import { EmploeeEntity, StatisticEmploee, StatusEmploee } from "@prisma/client";
import { UserAbstractReposiotory } from "src/domain/repositories/user-repository/user-repository.abstract";
import { IStatus, ResultEmploeeUseCase } from "../response-data/response.interface";
import { UpdateEmploeeDto } from "src/infrastructure/controllers/emploee/dto/updateEmploee.dto";
import { StatisticAbstractRepository } from "src/domain/repositories/statistic-repository/statistic-repository.abstract";

export class EmploeeUseCase {
    constructor(
        private readonly userRepository: UserAbstractReposiotory,
        private readonly statisticRepository: StatisticAbstractRepository
    ) { };

    private mapToStatisticResult(data: StatisticEmploee[], type: IStatus, dbStatus: StatusEmploee, index: number): ResultEmploeeUseCase.IStatisticResult {
        return {
            id: index,
            type: type,
            mounth: data.filter(el => el.time.getMonth() === (new Date()).getMonth() && el.type === dbStatus).length,
            year: data.filter(el => el.time.getFullYear() === (new Date()).getFullYear() && el.type === dbStatus).length
        }
    }

    public async getAllEmploee(): Promise<EmploeeEntity[]> {
        const users = await this.userRepository.findManyWithJobTitleEmploee();
        return users;
    };


    public async deleteEmploee(arrayOfId: Array<string>): Promise<ResultEmploeeUseCase.IResultDeletId> {
        for (let id of arrayOfId) {
            const isExistUser = await this.userRepository.getById(id);
            if (!isExistUser) throw new BadRequestException('Not found user');
            await this.userRepository.delete(id);
            await this.statisticRepository.create({ emploeeId: isExistUser.id, type: 'DELETE', time: new Date() });
        };
        return { message: 'success' };
    };

    public async update(data: UpdateEmploeeDto): Promise<EmploeeEntity> {
        const isExistUser = await this.userRepository.getById(data.id);
        if (!isExistUser) throw new BadRequestException('Not found user');
        return await this.userRepository.updateFieldsWithUserId(data.id, { ...data, jobTitle: 'EMPLOEE' });
    };

    public async getStatistics(): Promise<ResultEmploeeUseCase.IStatisticResult[]> {
        const data = await this.statisticRepository.findMany();
        const first = this.mapToStatisticResult(data, 'Dismissed', 'DELETE', 1);
        const second = this.mapToStatisticResult(data, 'Hired', 'WORK', 2)
        return [first, second];
    };
}