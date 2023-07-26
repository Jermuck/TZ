export interface ILoginDtoUser {
  name: string;
  surname: string;
  patronymic: string;
  password: string;
};

export interface IResponseData<T> {
  data: T;
};

export interface IUser {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  jobTitle: 'HR-MANAGER' | 'EMPLOEE';
  salary: number;
  password: string;
  dateStartWork: Date;
};

export interface ILoginResponse {
  user: IUser;
  access: string;
};

export interface ILogoutResponse{
  message: string;
}