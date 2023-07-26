import { IsDataURI, IsDate, IsDateString, IsNumber, Length, isDateString } from "class-validator";

export class BodyCanActivate {
  public _id: string;
}

export class EmploeeRegisterDto extends BodyCanActivate {
  @Length(2, 25)
  public name: string;

  @Length(2, 25)
  public surname: string;

  @Length(2, 25)
  public patronymic: string;

  @IsNumber()
  public salary: number;

  @IsDateString()
  public dateBirthday: Date;
}  
