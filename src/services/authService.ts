import { Cliente, Medico } from "@/models/data";

// Faz login de um usuário (cliente ou médico)
export function fazerLogin(email: string, senha: string): boolean {
  const usuario = buscarUsuario(email, senha);
  if (usuario) {
    const tipo = usuario.hasOwnProperty("crm") ? "medico" : "cliente";
    localStorage.setItem("usuarioLogado", JSON.stringify({ ...usuario, tipo }));
    return true;
  }
  return false;
}

// Faz logout do usuário
export function fazerLogout(): void {
  localStorage.removeItem("usuarioLogado");
}

// Verifica o usuário logado
export function verificarUsuarioLogado(): {
  tipo: "cliente" | "medico" | null;
  usuario: Cliente | Medico | null;
} {
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (usuarioLogado) {
    const usuario = JSON.parse(usuarioLogado);

    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");

    const cliente = clientes.find(
      (cliente: Cliente) => cliente.id === usuario.id,
    );
    if (cliente) return { tipo: "cliente", usuario: cliente };

    const medico = medicos.find((medico: Medico) => medico.id === usuario.id);
    if (medico) return { tipo: "medico", usuario: medico };
  }

  return { tipo: null, usuario: null };
}

// Busca um usuário (cliente ou médico) pelo email e senha
function buscarUsuario(email: string, senha: string): Cliente | Medico | null {
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
