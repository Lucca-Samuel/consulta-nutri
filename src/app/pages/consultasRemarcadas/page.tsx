"use client";

import "./style.css";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

const ConsultasRemarcadas = () => {
  return (
    <>
      <div className="container mx-auto my-auto md:mt-40 flex items-center coluna mt-10">
        {/* Container principal com duas colunas */}

        {/* Coluna do Calendário */}
        <div className="mt-20 flex md:w-1/2 max-w-5xl flex-col items-center justify-center">
          <h1 className="text-orange mb-5 text-3xl font-bold">
            Consultas Remarcadas
          </h1>
          <p className="text-verde mb-10 md:text-xl text-lg">
            Acompanhe sua agenda de remarcação por aqui.
          </p>
          <Calendar />
          <button className="border-verde mt-10 md:w-[600px] w-[400px] rounded-2xl border-2 border-solid p-3">
            <h1 className="text-verde ml-5 text-left md:text-lg text-base font-bold">
              Próximas consultas
            </h1>
            <p className="text-verde ml-5 text-left md:text-base text-sm">
              Veja Seus próximos pacientes preparados para uma consulta com você.
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
            <p className="text-verde mr-10 text-lg">Nutróloga</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultasRemarcadas;
