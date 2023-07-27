import { EmploeeEntity } from "@prisma/client";
import { EmploeeModel } from "src/domain/models/Emploee.model";

export abstract class UserAbstractReposiotory {
  abstract create(data: EmploeeModel): Promise<EmploeeEntity>;
  abstract getById(id: string): Promise<EmploeeEntity | null>;
  abstract delete(id: string): Promise<EmploeeEntity | null>;
  abstract findUniqueBySurname(patronymic: string): Promise<EmploeeEntity | null>;
  abstract findUserByLink(link: string): Promise<EmploeeEntity | null>;
  abstract udpatePasswordById(id: string, password: string): Promise<EmploeeEntity>;
  abstract setLinkNullById(id: string): Promise<EmploeeEntity>;
  abstract findManyWithJobTitleEmploee(): Promise<EmploeeEntity[]>;
};
