import { v4 } from "uuid";
import { Cliente } from "../models/usuario"; // Importando a interface Cliente

// Criando o objeto clientes com a tipagem correta
const clientes: Cliente = {
  id: v4(), // Gera um ID único
  email: "teste@teste.com",
  senha: "ADM1234",
};

export default clientes;
