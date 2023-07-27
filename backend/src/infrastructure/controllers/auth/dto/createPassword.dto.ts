import { Length } from "class-validator";

export class CreatePasswordDto {
    @Length(2, 25)
    public password: string;
    @Length(2, 100)
    public linkId: string;
}