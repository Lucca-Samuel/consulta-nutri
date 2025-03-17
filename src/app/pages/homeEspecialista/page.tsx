 "use client";

import React from "react";
import Image from "next/image";
import "./style.css";


const HomeEspecialista = () => {
    return (
      <>
        <div className="container mx-auto flex items-center justify-center coluna">
          {/* Container principal usando grid com duas colunas */}

          <div className="mt-20 grid md:w-1/2 max-w-5xl items-center">
            {/* Coluna de Texto */}
            <h1 className="text-orange mt-5 flex md:justify-start md:text-4xl text-3xl font-bold titulo">
              Olá, seja bem-vindo Especialista!
            </h1>
            <p className="text-verde mt-3 md:text-xl text-lg">
              Atenda novos pacientes e ajude-os a conquistar uma vida mais
              saudável e equilibrada
            </p>
            <button className="border-verde mt-10 md:w-[600px] w-[350] rounded-2xl border-2 border-solid md:p-3 botao">
              <h1 className="text-verde ml-5 text-left text-lg font-bold">
                Próximas consultas
              </h1>
              <p className="text-verde ml-5 text-left text-base">
                Veja Seus próximos pacientes preparados para uma consulta com
                você
              </p>
            </button>
            <button className="border-verde mt-10 md:w-[600px] w-[350] rounded-2xl border-2 border-solid md:p-3 botao">
              <h1 className="text-verde ml-5 text-left text-lg font-bold">
                Consultas remarcadas
              </h1>
              <p className="text-verde ml-5 text-left text-base">
                Acompanhe sua agenda de remarcação por aqui
              </p>
            </button>
          </div>

          <div className="mt-[100] grid md:w-1/2 max-w-5xl items-center">
            {/* Coluna de Imagem */}

            <div className="flex md:w-1/2">
              <Image
                src="/assets/images/medico3.jpg"
                alt="Nutricionista dando joia"
                width={800}
                height={1000}
                className="md:ml-40 md:mt-40 mt-14 flex md:max-w-[150%] items-center justify-center rounded-lg"
              />              
            </div>
          </div>
        </div>
      </>
    );
};

export default HomeEspecialista;