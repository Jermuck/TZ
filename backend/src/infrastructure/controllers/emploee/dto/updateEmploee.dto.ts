import { IsDateString, IsNumber, Length } from "class-validator";

export class UpdateEmploeeDto {
    @Length(2, 100)
    public id: string;

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