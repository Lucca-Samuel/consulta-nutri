import Image from "next/image";
import "@/app/globals.css";
import "./style.css";

const Sobre = () => {
  return (
    <div className="bg-sobre bg-white md:pt-[200px] pt-28"
    id="sobre">
      <div className="container mx-auto flex items-center justify-center">
        {/* Container principal usando grid com duas colunas */}
        <div className="md:mt-[100] grid md:w-1/2 max-w-5xl items-center gap-8 md:pl-8">
          {/* Coluna de Texto */}
          <div className="text-left">
            <h1 className="titulo text-verde mb-10 text-6xl font-bold">
              O que é o <span className="text-orange">ConsultaNutri?</span>
            </h1>
            <p className="text-verde mb-10 text-xl">
              Consulta Nutri é um serviço projetado para oferecer suporte
              especializado e personalizado em nutrição e suplementação. Nossa
              missão é ajudar você a alcançar uma saúde ótima por meio de
              orientação profissional e cuidadosa.
            </p>
            <p className="text-verde mb-12 text-xl">
              Para quem deseja experimentar, oferecemos uma área gratuita com
              sugestões alimentares, um questionário para identificar
              suplementos adequados e informações básicas sobre nossos serviços.
            </p>
            <p className="text-orange text-xl font-bold">
              O Consulta Nutri é ideal para quem busca orientação especializada
              e acompanhamento personalizado para uma vida mais saudável.
            </p>
          </div>

          {/* Coluna de Imagem */}
        </div>
        <div className="imagem flex w-1/2 items-end justify-end">
          <Image
            src="/assets/images/NutricionistaSobre.png"
            alt="Nutricionista segurando alimentos"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
