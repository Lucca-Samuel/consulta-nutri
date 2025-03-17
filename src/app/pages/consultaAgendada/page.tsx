import { Calendar } from "@/components/ui/calendar";
import "./style.css";
import { IoLogoWhatsapp } from "react-icons/io";

const ConsultaAgendada = () => {
  return (
    <>
      <div className="container mx-auto my-auto mt-40 flex items-center coluna">
        {/* Container principal com duas colunas */}

        <div className="flex w-full flex-row px-6 md:w-1/2 coluna">
          {/* Coluna de Imagem e texto*/}
          <div className="bg-medica h-[600px] w-[500px]"></div>
          <div className="md:mt-20 flex md:w-1/2">
            <div className="md:ml-10">
              <h1 className="text-verde md:mt-10 mt-5 text-sm">Home/Agendamento</h1>
              <h1 className="text-orange mt-5 md:text-4xl text-3xl font-bold">
                Dra. Evelyn Maria Corrêa
              </h1>
              <p className="text-verde mt-2 text-lg">CRM 111.22</p>
              <p className="text-verde mb-5 mt-5 flex text-lg">
                Formada pela Medicina pela UNIFESP, Universidade Federal de São
                Paulo Escola Paulista de Medicina, com especializações de Nutrição
                Clínica e Hospitalar pelo GANEP e pela ABRAN.
              </p>
              <div className="flex flex-row md:mt-40 ">
                <button className="text-orange -ml-[350px] text-left text-xl">
                  <IoLogoWhatsapp className="" size={40} />
                </button>
                <span className="text-verde font-semibold ml-1">Clique e converse <br />
                  com seu especialista
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Coluna do Calendário */}
        <div className="md:mt-20 flex w-1/2 max-w-5xl items-center justify-center">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default ConsultaAgendada;
