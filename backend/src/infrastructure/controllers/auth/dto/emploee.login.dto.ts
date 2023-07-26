import { IsDate, Length } from "class-validator";
import { BodyCanActivate } from "./emploee.register.dto";

export class EmploeeLoginDto extends BodyCanActivate {
  @Length(2, 25)
  public name: string;
  @Length(2, 25)
  public surname: string;
  @Length(2, 25)
  public patronymic: string;
  @Length(2, 25)
  public password: string;
}
