import { Injectable } from "@nestjs/common";
import { EmploeeEntity, TokenEntity } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";
import { TokenAbstractRepository } from "src/domain/repositories/token-repository/token-repository.adapter";
import { PrismaService } from "src/infrastructure/config/prisma.config";

@Injectable()
export class TokensRepository implements TokenAbstractRepository {
  constructor(
    private readonly prisma: PrismaService
  ) { };

  public async createWithoutRelationUser(token: string, userId: string): Promise<TokenEntity> {
    return await this.prisma.tokenEntity.create({
      data: { token, emploeeId: userId }
    })
  };

  public async update(id: string, token: string): Promise<TokenEntity> {
    return await this.prisma.tokenEntity.update({
      where: { id }, data: { token }
    })
  };

  public async getByUserId(userId: string): Promise<TokenEntity> {
    return await this.prisma.tokenEntity.findUnique({
      where: { emploeeId: userId }
    })
  };


  public async delete(id: string): Promise<TokenEntity> {
    return await this.prisma.tokenEntity.delete({
      where: {id}
    })
  }
}
