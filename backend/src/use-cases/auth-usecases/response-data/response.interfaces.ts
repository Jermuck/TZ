import { EmploeeEntity } from "@prisma/client";

export namespace ResultAuthorization {
  export class IResultRegister {
    public link: string;
    public header: string;
  }

  export class IResultLogin {
    public user: EmploeeEntity;
    public access: string;
    public header: string
  };

  export class IResultLogout{
    message: string;
  }
}
