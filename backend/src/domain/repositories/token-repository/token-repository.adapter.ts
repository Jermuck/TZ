import { TokenEntity } from "@prisma/client";

export abstract class TokenAbstractRepository {
  abstract update(id: string, token: string): Promise<TokenEntity>;
  abstract getByUserId(userId: string): Promise<TokenEntity>;
  abstract createWithoutRelationUser(token: string, userId: string): Promise<TokenEntity>;
  abstract delete(id: string): Promise<TokenEntity>;
};
