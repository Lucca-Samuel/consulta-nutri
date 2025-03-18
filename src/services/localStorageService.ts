import { v4 } from "uuid";
import { Cliente, Medico } from "@/models/data";

export function cadastrarCliente(email: string, senha: string): Cliente {
  const novoCliente: Cliente = {
    id: v4(),
    email,
    senha,
  };

  const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  clientes.push(novoCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  return novoCliente;
}

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

export function buscarUsuario(
  email: string,
  senha: string,
): Cliente | Medico | null {
  const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");

  const clienteEncontrado = clientes.find(
    (cliente: Cliente) => cliente.email === email && cliente.senha === senha,
  );
  if (clienteEncontrado) return clienteEncontrado;

  const medicoEncontrado = medicos.find(
    (medico: Medico) => medico.email === email && medico.senha === senha,
  );
  if (medicoEncontrado) return medicoEncontrado;

  return null;
}

export function verificarUsuarioLogado(): {
  tipo: "cliente" | "medico" | null;
  usuario: Cliente | Medico | null;
} {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (usuarioLogado) {
    const usuario = JSON.parse(usuarioLogado);

    // Verifica se o usuário logado é cliente ou médico
    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");

    const cliente = clientes.find(
      (cliente: Cliente) => cliente.id === usuario.id,
    );
    if (cliente) {
      return { tipo: "cliente", usuario: cliente };
    }

    const medico = medicos.find((medico: Medico) => medico.id === usuario.id);
    if (medico) {
      return { tipo: "medico", usuario: medico };
    }
  }

  return { tipo: null, usuario: null };
}

export function fazerLogin(email: string, senha: string): boolean {
  const usuario = buscarUsuario(email, senha);
  if (usuario) {
    // Determina o tipo de usuário (cliente ou médico)
    const tipo = usuario.hasOwnProperty("crm") ? "medico" : "cliente";

    localStorage.setItem("usuarioLogado", JSON.stringify({ ...usuario, tipo }));
    return true;
  }
  return false;
}

export function fazerLogout(): void {
  localStorage.removeItem("usuarioLogado");
}
