import { UserRepository } from "./users-repository/users.reposiory";
import { TokensRepository } from "./tokens-repository/tokens.repository";
import { Module } from "@nestjs/common"
import { PrismaService } from "../config/prisma.config";
import { StatisticRepository } from "./statistic-repository/statistic.repository";

@Module({
  providers: [
    UserRepository,
    TokensRepository,
    PrismaService,
    StatisticRepository
  ],
  exports: [
    UserRepository,
    TokensRepository,
    StatisticRepository

  ]
})
export class RepositoryModule { };
