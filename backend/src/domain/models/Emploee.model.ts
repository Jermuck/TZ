import { JonTitle } from "@prisma/client";

export class EmploeeModel {
  public name: string;
  public surname: string;
  public patronymic: string;
  public jobTitle: JonTitle;
  public dateBirthday: Date;
  public salary?: number;
  public password?: string;
  public link?: string;
}
