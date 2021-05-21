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
  checkCode: string;
  email: string;
  userName: string;
}

export { Login, Reject, userReauest }