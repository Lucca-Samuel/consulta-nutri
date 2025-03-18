"use client";

import Link from "next/link";
import InputField from "@/components/inputs/input";
import Button from "@/components/Button/button";
import DropdownEspecializacao from "@/components/dropDowMenu/dropDowMenu"; // Importe a função correta
import { useState } from "react";
import { cadastrarMedico } from "@/services/medicoService"; // Importe a função atualizada
import { Medico } from "@/models/usuario";

const CadastroPro = () => {
  const [isSecondPartVisible, setIsSecondPartVisible] = useState(false);

  // Estado para armazenar os dados do formulário
  const [especializacao, setEspecializacao] = useState("");
  const [crm, setCrm] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [codP, setCodP] = useState(""); // Prefixo do telefone
  const [numb, setNumb] = useState(""); // Número do telefone

  // Função chamada ao clicar no botão "Próximo"
  const handleNext = () => {
    setIsSecondPartVisible(true);
  };

  // Função de cadastro
  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais. Por favor, verifique.");
    } else {
      // Concatenando o código do telefone e o número
      const numeroCompleto = codP + numb;
      setNumeroTelefone(numeroCompleto); // Atualiza o estado com o número completo

      // Verificar se o e-mail já está cadastrado
      const medicos = JSON.parse(localStorage.getItem("medicos") || "[]");

      const emailExistente = medicos.some(
        (medico: Medico) => medico.email === email,
      );

      if (emailExistente) {
        alert("Este e-mail já está cadastrado. Por favor, use outro.");
        return; // Interrompe o cadastro se o email já existir
      }

      // Usar a função cadastrarMedico para registrar o novo médico
      const novoMedico = cadastrarMedico(
        especializacao,
        crm,
        nome,
        sobrenome,
        estado,
        cidade,
        numeroTelefone,
        email,
        senha,
      );

      alert(`Médico ${novoMedico.nome} cadastrado com sucesso!`);

      // Limpar os campos
      setEspecializacao("");
      setCrm("");
      setNome("");
      setSobrenome("");
      setEstado("");
      setCidade("");
      setNumeroTelefone("");
      setCodP("");
      setNumb("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      window.location.href = "/pages/login";
    }
  };

  return (
    <div className="container mx-auto mt-10 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-md border bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Registrar-se gratuitamente como especialista
        </h1>

        {/* Primeira parte */}
        {!isSecondPartVisible && (
          <>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                Especialização*
              </label>
              <DropdownEspecializacao
                items={["Nutricionista", "Nutrólogo"]}
                texto={"Selecione"}
                value={especializacao}
                onChange={(e) => setEspecializacao(e.target.value)} // Atualiza o estado com a seleção
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InputField
                label="CRM*"
                placeholder="CRM*"
                required
                type="text"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
              />
              <InputField
                label="Nome*"
                placeholder="Nome*"
                required
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputField
                label="Sobrenome*"
                placeholder="Sobrenome*"
                required
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </div>

            <Button
              texto={"Próximo"}
              estilo={"bg-verde botao-verde mt-4 w-full rounded-md py-2"}
              funcao={handleNext} // Chama a função handleNext ao clicar
            />

            <p className="mt-4 text-center text-sm">
              Não é um profissional da saúde?{" "}
              <Link
                href="/pages/quest"
                className="text-blue-500 hover:underline"
              >
                Voltar
              </Link>
            </p>
          </>
        )}

        {/* Segunda parte */}
        {isSecondPartVisible && (
          <div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">Estado*</label>
              <DropdownEspecializacao
                items={[
                  "AC",
                  "AL",
                  "AM",
                  "AP",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MG",
                  "MS",
                  "MT",
                  "PA",
                  "PB",
                  "PE",
                  "PI",
                  "PR",
                  "RJ",
                  "RN",
                  "RO",
                  "RR",
                  "RS",
                  "SC",
                  "SE",
                  "SP",
                  "TO",
                ]}
                texto={"Selecione"}
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">Cidade*</label>
              <DropdownEspecializacao
                items={["Taubaté"]}
                texto={"Selecione"}
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                Número de Telefone
              </label>
              <div className="flex flex-row justify-around gap-2">
                <DropdownEspecializacao
                  items={["+55", "+44", "+1"]} // Exemplos de prefixos
                  texto={""}
                  estilo={"w-auto"}
                  value={codP}
                  onChange={(e) => setCodP(e.target.value)} // Atualiza o código
                />
                <InputField
                  label="Número"
                  placeholder="Número com DD*"
                  required
                  type="text"
                  value={numb} // Usa o valor do número
                  onChange={(e) => setNumb(e.target.value)} // Atualiza o número
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <InputField
                label="E-mail*"
                placeholder="E-mail*"
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Senha*"
                placeholder="Senha*"
                required
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <InputField
                label="Confirmar Senha*"
                placeholder="Confirmar Senha*"
                required
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>

            <Button
              texto={"Registrar-se"}
              estilo={"bg-verde botao-verde mt-4 w-full rounded-md py-2"}
              funcao={handleCadastro} // Chama a função handleCadastro ao clicar
            />

            <p className="mt-4 text-center text-sm">
              Não é um profissional da saúde?{" "}
              <Link
                href="/pages/quest"
                className="text-blue-500 hover:underline"
              >
                Voltar
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastroPro;
