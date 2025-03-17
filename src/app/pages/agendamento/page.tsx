import Button from "@/components/Button/button";
import Image from "next/image";
import "./style.css";

const Agendamento = () => {
  return (
    <>
      <div className="coluna container mx-auto flex items-center justify-center">
        {/* Container principal usando grid com duas colunas */}

        <div className="grid w-1/2 max-w-5xl items-center gap-8 pl-8 md:mt-[100]">
          {/* Coluna de Imagem */}
          <div className="flex w-1/2">
            <Image
              src="/assets/images/medico.jpg"
              alt="Nutricionista segurando prancheta"
              width={800}
              height={1000}
              className="mt-40 max-w-[150%] rounded-lg"
            />
          </div>
        </div>

        {/* Coluna de Texto */}
        <div className="mt-[100] grid w-1/2 max-w-5xl items-center">
          <h1 className="text-orange mb-8 mt-20 text-left text-3xl font-bold md:mb-10 md:mt-60 md:text-5xl">
            Agendamento com nossos especialistas
          </h1>
          <p className="text-verde mb-8 text-left text-xl md:mb-10 md:text-justify">
            Agende suas consultas com nossos nutrólogos e nutricionistas
            conforme seu plano e necessidades específicas. Oferecemos consultas
            totalmente online, permitindo que você tenha acesso ao atendimento
            de saúde de forma prática, a qualquer hora e de qualquer lugar.
          </p>
          <p className="text-verde text-left text-xl mb-5 md:mb-12 md:text-justify">
            Acesso ilimitado ao chat com seu médico e à gestão do pagamento do
            seu plano mensal.
          </p>
          <div className="mt-3 flex justify-center md:mt-10">
            <Button
              texto={"Agendar Agora"}
              estilo={"flex justify-center items-center h-16 w-42"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Agendamento;
