import { Type } from "class-transformer";
import { IsArray, IsString } from "class-validator";

export class DeleteEmploeeDto {
    @IsString({each: true})
    public arrayOfId: Array<string>;
}