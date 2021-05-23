interface Login {
  password: string;
  email: string;
}
interface ErroMsg {
  code: string;
  field: string;
  message: string;
}
interface userReauest {
  status: number;
  requestUrl: string;
  msg: string | ErroMsg[];
  code: number;
  httpCode: number;
  errsInfo: number;
}
interface Reject {
  password: string;
  password2: string;
  chek_code: string;
  email: string;
  name: string;
}

export { Login, Reject, userReauest }