import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class PipeValidator implements PipeTransform {
    public async transform(value: any, {metatype}: ArgumentMetadata) {
        const object = plainToInstance(metatype, value);
        const errors = await validate(object);
        if(errors.length > 0) {
            const responseErrorArray = errors.map(err => err.property);
            throw new BadRequestException(responseErrorArray)
        };
        return value;
    }
}