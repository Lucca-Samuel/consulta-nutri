import { v4 } from "uuid";
import { Medico } from "@/models/data";

// Cadastra um novo médico
export function cadastrarMedico(
  especializacao: string,
  crm: string,
  nome: string,
  sobrenome: string,
  estado: string,
  cidade: string,
  numeroDeTelefone: string,
  email: string,
  senha: string,
): Medico {
  const novoMedico: Medico = {
    id: v4(),
    especializacao,
    crm,
    nome,
    sobrenome,
    estado,
    cidade,
    numeroDeTelefone,
    email,
    senha,
  };

  const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");
  medicos.push(novoMedico);
  localStorage.setItem("medicos", JSON.stringify(medicos));

  return novoMedico;
}

// Busca um médico pelo email e senha
export function buscarMedico(email: string, senha: string): Medico | null {
  const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");
  const medicoEncontrado = medicos.find(
    (medico: Medico) => medico.email === email && medico.senha === senha,
  );
  return medicoEncontrado || null;
}
