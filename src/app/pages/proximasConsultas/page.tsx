"use client"

import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import "./style.css";

const ProximasConsultas = () => {
  return (
    <>
      <div className="container mx-auto my-auto mt-40 flex items-center coluna">
        {/* Container principal com duas colunas */}

        {/* Coluna do Calendário */}
        <div className="md:mt-20 flex md:w-1/2 max-w-5xl flex-col items-center justify-center">
          <h1 className="text-orange mb-5 text-3xl font-bold">
            Próximas Consultas
          </h1>
          <p className="text-verde mb-10 text-xl">
            Próximos pacientes agendados com você.
          </p>
          <Calendar />
          <button className="border-verde mt-10 md:w-[600px] w-[400px] rounded-2xl border-2 border-solid p-3">
            <h1 className="text-verde ml-5 text-left text-lg font-bold">
              Consultas remarcadas
            </h1>
            <p className="text-verde ml-5 text-left text-base">
              Acompanhe sua agenda de remarcação por aqui
            </p>
          </button>
        </div>

        <div className="grid md:w-1/2 max-w-5xl items-center">
          {/* Coluna de Imagem */}

          <div className="flex w-1/2">
            <Image
              src="/assets/images/medica.jpg"
              alt="medica"
              width={500}
              height={600}
              className="md:ml-40 ml-24 mt-10 flex max-w-[100%] items-center justify-center md:rounded-[80px] rounded-3xl"
            />
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <p className="text-orange mr-10 text-xl font-semibold">
              Dra. Evelyn Maria Corrêa
            </p>
            <p className="text-verde mr-10 text-lg">CRM 111.22</p>
            <p className="mr-10 text-verde text-lg">Nutróloga</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProximasConsultas;
