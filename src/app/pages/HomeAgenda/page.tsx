"use client";

import DropdownEspecializacao from "@/components/dropDowMenu/dropDowMenu";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button/button";
import "./style.css";
import { useState } from "react";

const HomeAgenda = () => {
  const [especializacao, setEspecializacao] = useState("");
  const [profissional, setProfissional] = useState("");

  return (
    <>
      <div className="coluna container mx-auto flex items-center justify-center">
        {/* Container principal usando grid com duas colunas */}

        <div className="coluna grid max-w-5xl items-center md:mt-[100] md:w-1/2">
          {/* Coluna de Texto */}
          <h1 className="text-verde mb-5 mt-36 flex justify-start text-sm md:mt-60">
            Home/Agedamento
          </h1>
          <h1 className="text-orange flex justify-start text-3xl font-bold md:mt-5 md:text-4xl">
            Faça seu Agendamento
          </h1>
          <p className="text-verde mt-3 text-lg md:text-xl">
            Cuide da sua saúde com nossos especialistas renomeados.
          </p>
          <label className="text-verde mt-12 text-lg">Especialização</label>
          <DropdownEspecializacao
            items={["Nutricionista", "Nutróloga"]}
            estilo={"md:w-[450px] w-[350px] border-verde border-2 drop"}
            texto={"Selecione"}
            value={especializacao}
            onChange={(e) => setEspecializacao(e.target.value)}
          />
          <label className="text-verde mt-8 text-lg">Profissional</label>
          <DropdownEspecializacao
            items={["Dra.Carolina", "Dr.Erick", "Dra.Larissa"]}
            estilo={"md:w-[450px] w-[350px] border-verde border-2 drop"}
            texto={"Selecione"}
            value={profissional}
            onChange={(e) => setProfissional(e.target.value)}
          />
          <Button
            texto={"Próximo"}
            estilo={"botao flex justify-center items-center mt-16"}
            funcao={undefined}
          />
        </div>

        <div className="coluna mt-[100] grid max-w-5xl items-center md:w-1/2">
          {/* Coluna de Imagem */}

          <div className="flex w-1/2">
            <Image
              src="/assets/images/medico2.jpg"
              alt="Nutricionista segurando prancheta"
              width={800}
              height={1000}
              className="ml-14 mt-20 flex max-w-[150%] items-center justify-center rounded-lg md:ml-40 md:mt-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAgenda;
