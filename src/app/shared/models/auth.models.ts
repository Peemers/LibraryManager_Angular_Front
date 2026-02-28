export interface User {
  readonly email: string;
  readonly password: string;
  readonly role: string;
  readonly  first_name: string;
  readonly  last_name: string;
}

export interface Role {
  readonly user: string;
  readonly token: string;
}

export interface LoginRequestDTO{
readonly email : string;
readonly password: string;
}

export interface LoginResponseDTO{
readonly user : User;
readonly token: string;
}

export interface UserSignUpDTO{
  email : string;
  password: string;
  lastname?: string;
  firstname?: string;
}
