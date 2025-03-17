import { v4 } from "uuid";

export interface Cliente {
  id: string;
  email: string;
  senha: string;
}

export interface Medico {
  id: string;
  especialização: string;
  crm: string;
  Nome: string;
  sobrenome: string;
  Estado: string;
  cidade: string;
  numero_de_telefone: string;
  email: string;
  senha: string;
}
