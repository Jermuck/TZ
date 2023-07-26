import { Injectable } from "@nestjs/common";
import { UserAbstractReposiotory } from "src/domain/repositories/user-repository/user-repository.abstract";
import { PrismaService } from "src/infrastructure/config/prisma.config";
import { EmploeeModel } from "src/domain/models/Emploee.model";
import { EmploeeEntity, JonTitle } from "@prisma/client";

@Injectable()
export class UserRepository implements UserAbstractReposiotory {
  constructor(
    private readonly prisma: PrismaService
  ) { };

  public async create(data: EmploeeModel): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.create({
      data: data
    })
  };

  public async delete(id: string): Promise<EmploeeEntity | null> {
    return await this.prisma.emploeeEntity.delete({
      where: { id: id }
    })
  };

  public async getById(id: string): Promise<EmploeeEntity | null> {
    return await this.prisma.emploeeEntity.findUnique({
      where: { id: id }
    })
  };

  public async findUniqueBySurname(surname: string): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.findUnique({
      where: { surname }
    })
  };
}
