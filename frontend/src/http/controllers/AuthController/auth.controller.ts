import { AxiosResponse } from "axios";
import { ILoginDtoUser, ILoginResponse, ILogoutResponse, IResponseData } from "../../../../types/index.types"
import { $api } from "../../config/http.config";
import { IEmploee } from "../../../components/ModalItems/ModalItems";

export class AuthController {
  static getInstance() {
    return new AuthController();
  };

  public async login(data: ILoginDtoUser): Promise<AxiosResponse<IResponseData<ILoginResponse>>> {
    return await $api.post<IResponseData<ILoginResponse>>('/auth/login', data);
  };

  public async refresh(): Promise<AxiosResponse<IResponseData<ILoginResponse>>> {
    return await $api.get<IResponseData<ILoginResponse>>('/auth/refresh');
  };

  public async logout(): Promise<AxiosResponse<IResponseData<ILogoutResponse>>>{
    return await $api.post<IResponseData<ILogoutResponse>>('/auth/logout');
  };

  public async cretateEmploee(data: IEmploee): Promise<AxiosResponse<IResponseData<string>>>{
    return await $api.post<IResponseData<string>>('/auth/emploee/register', data);
  }
}
