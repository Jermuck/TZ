export interface ILoginDtoUser {
  name: string;
  surname: string;
  patronymic: string;
  password: string;
};

export enum JobTitle {
  HR_MANAGER = 'HR_MANAGER',
  EMPLOEE = 'EMPLOEE'
}

export interface IResponseData<T> {
  data: T;
};

export interface IUser {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  jobTitle: 'HR_MANAGER' | 'EMPLOEE';
  salary: number;
  password: string | null;
  dateStartWork: Date;
  dateBirthday: Date;
};

export interface ILoginResponse {
  user: IUser;
  access: string;
};

export interface ILogoutResponse{
  message: string;
};

export interface IUserForTable {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  jobTitle: 'HR_MANAGER' | 'EMPLOEE';
  salary: number;
  password: boolean;
  dateStartWork: Date;
  dateBirthday: Date;
};
