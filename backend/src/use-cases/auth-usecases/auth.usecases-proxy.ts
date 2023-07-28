import { DynamicModule, Module } from "@nestjs/common";
import { TokensRepository } from "src/infrastructure/repositories/tokens-repository/tokens.repository";
import { UserRepository } from "src/infrastructure/repositories/users-repository/users.reposiory";
import { RepositoryModule } from "src/infrastructure/repositories/repository.module";
import { JwtAdapter } from "src/infrastructure/services/jwt/jwt.service";
import { JwtAdapterModule } from "src/infrastructure/services/jwt/jwt.module";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";
import { ConfigService } from "@nestjs/config";
import { BcryptModule } from "src/infrastructure/services/bcrypt/bcrypt.module";
import { AuthUseCase } from "./usecase-blocks/auth.usecase";
import { StatisticRepository } from "src/infrastructure/repositories/statistic-repository/statistic.repository";

@Module({})
export class AuthUseCaseModule {
  static AUTHORIZATION = "AUTHORIZATION";

  static register(): DynamicModule {
    return {
      module: AuthUseCaseModule,
      providers: [
        {
          inject: [UserRepository, TokensRepository, BcryptService, JwtAdapter, ConfigService, StatisticRepository],
          useFactory: (
            userRepo: UserRepository,
            tokenRepo: TokensRepository,
            bcrypt: BcryptService,
            jwt: JwtAdapter,
            config: ConfigService,
            statisticRepo: StatisticRepository
          ) => new AuthUseCase(userRepo, tokenRepo, bcrypt, jwt, config, statisticRepo),
          provide: this.AUTHORIZATION
        }
      ],
      exports: [
        this.AUTHORIZATION
      ],
      imports: [RepositoryModule, JwtAdapterModule, BcryptModule.register(3)]
    }
  }
}
