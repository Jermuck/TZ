import { DynamicModule } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repositories/users-repository/users.reposiory";
import { EmploeeUseCase } from "./usecase-blocks/emploee.usecase";
import { RepositoryModule } from "src/infrastructure/repositories/repository.module";
import { StatisticRepository } from "src/infrastructure/repositories/statistic-repository/statistic.repository";

export class EmploeeUseCaseModule{
    static EMPLOEE_USECASE = 'EMPLOEE_USECASE';
    static regiter(): DynamicModule {
        return {
            module: EmploeeUseCaseModule,
            providers: [
                {
                    inject:[UserRepository, StatisticRepository],
                    useFactory: (userRepo: UserRepository, statisticRepo: StatisticRepository) => new EmploeeUseCase(userRepo, statisticRepo),
                    provide: this.EMPLOEE_USECASE
                }
            ],
            imports: [RepositoryModule],
            exports: [this.EMPLOEE_USECASE]
        }
    }
}