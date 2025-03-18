// import { v4 } from "uuid";

export interface Cliente {
  id: string;
  email: string;
  senha: string;
}

export interface Medico {
  id: string;
  especializacao: string;
  crm: string;
  nome: string;
  sobrenome: string;
  estado: string;
  cidade: string;
  numeroDeTelefone: string;
  email: string;
  senha: string;
}
