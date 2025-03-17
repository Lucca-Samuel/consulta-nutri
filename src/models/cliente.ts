import { v4 } from "uuid";
import Login from "./data";

const clientes: Login = {
  id: v4(),
  email: "teste@teste.com",
  senha: "ADM1234",
};

export default clientes;
