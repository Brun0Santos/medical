export interface Login {
  userId: string;
  login: string;
  email: string;
  token: string;
  role: string;
}

export interface LoginData {
  login: string;
  email: string;
  password: string;
  cpf?: string;
}
