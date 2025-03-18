// import { v4 } from "uuid";

// Interface base para usuários (Cliente e Medico)
interface UsuarioBase {
  id: string;
  email: string;
  senha: string;
}

// Interface para Cliente (adicionando propriedades específicas, se necessário)
export interface Cliente extends UsuarioBase {
  telefone?: string; // Exemplo de propriedade específica
  endereco?: string; // Outro exemplo
}

// Interface para Medico
export interface Medico extends UsuarioBase {
  especializacao: string; // Padronizado para camelCase
  crm: string;
  nome: string; // Padronizado para camelCase
  sobrenome: string; // Padronizado para camelCase
  estado: string; // Padronizado para camelCase
  cidade: string;
  numeroDeTelefone: string; // Padronizado para camelCase
}
