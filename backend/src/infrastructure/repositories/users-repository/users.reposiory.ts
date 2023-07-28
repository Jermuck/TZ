import { Injectable } from "@nestjs/common";
import { UserAbstractReposiotory } from "src/domain/repositories/user-repository/user-repository.abstract";
import { PrismaService } from "src/infrastructure/config/prisma.config";
import { EmploeeModel } from "src/domain/models/Emploee.model";
import { EmploeeEntity, JonTitle } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime";

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

  public async findUserByLink(link: string): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.findUnique({
      where: { link }
    })
  };

  public async udpatePasswordById(id: string, password: string): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.update({
      where: { id }, data: { password }
    })
  };

  public async setLinkNullById(id: string): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.update({
      where: {id}, data: {link: null}
    })
  };

  public async findManyWithJobTitleEmploee(): Promise<EmploeeEntity[]> {
    return await this.prisma.emploeeEntity.findMany({
      where: {jobTitle: 'EMPLOEE'}
    })
  };

  public async updateFieldsWithUserId(id: string, data: EmploeeModel): Promise<EmploeeEntity> {
    return await this.prisma.emploeeEntity.update({
      where: {id}, data
    })
  };

  public async findMany(): Promise<EmploeeEntity[]> {
    return await this.prisma.emploeeEntity.findMany();
  }
}
