import { v4 } from "uuid";
import { Cliente } from "@/models/data";

// Cadastra um novo cliente
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

// Busca um cliente pelo email e senha
export function buscarCliente(email: string, senha: string): Cliente | null {
  const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
  const clienteEncontrado = clientes.find(
    (cliente: Cliente) => cliente.email === email && cliente.senha === senha,
  );
  return clienteEncontrado || null;
}
