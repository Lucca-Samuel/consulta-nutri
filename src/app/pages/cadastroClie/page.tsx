"use client";

import { useState } from "react";
import InputField from "@/components/inputs/input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "@/components/Button/button";
import "@/app/globals.css";
import { cadastrarCliente } from "@/services/localStorageService";

const CadastroClie = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais. Por favor, verifique.");
    } else {
      // Verificar se o e-mail já está cadastrado
      const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

      const emailExistente = clientes.some(
        (cliente: Cliente) => cliente.email === email,
      );

      if (emailExistente) {
        alert("Este e-mail já está cadastrado. Por favor, use outro.");
        return; // Interrompe o cadastro se o email já existir
      }

      const novoCliente = cadastrarCliente(email, senha);

      alert("Cadastro realizado com sucesso!");

      // Limpa os campos
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      window.location.href = "/pages/login";
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg border bg-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">Registre-se com:</h1>

        {/* Botões de Login com Google e Apple */}
        <div className="space-y-2">
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
            <FcGoogle className="mr-2" size={20} /> Continuar com Google
          </button>
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
            <FaApple className="mr-2" size={20} /> Continuar com Apple
          </button>
        </div>

        {/* Linha divisória com "OU" */}
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-500">OU</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Campos de entrada */}
        <div className="space-y-3">
          <InputField
            placeholder="Digite seu e-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <InputField
            placeholder="Senha"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
          <InputField
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            value={confirmarSenha}
          />
        </div>

        {/* Botão para registro */}
        <Button
          texto={"Registrar-se"}
          estilo={"bg-verde botao-verde mt-4 w-full rounded-md py-2"}
          funcao={handleCadastro}
        />

        {/* Link para login */}
        <p className="mt-4 text-sm text-gray-500">
          Já tem uma conta?{" "}
          <a href="/pages/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};

export default CadastroClie;
