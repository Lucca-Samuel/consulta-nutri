import "@/app/globals.css";
import "./style.css";

const NutriNutrologo = () => {
  return (
    <div className="bg-verde py-14 text-white md:py-[100px]" id="nutrologo_nutri">
      <div className="coluna container mx-auto flex items-center justify-center">
        {/* Container principal usando grid com duas colunas */}
        <div className="items-center p-10 md:grid md:w-1/2 md:max-w-5xl md:gap-8 md:pl-8">
          {/* Coluna de Texto */}
          <div className="text-left">
            <h1 className="text-center text-3xl font-bold md:mb-5 md:text-4xl">
              Nutrólogo
            </h1>
            <p className="text-justify text-lg md:text-xl">
              Possui formação médica especializada e oferece orientações
              detalhadas sobre nutrição e alimenteação. É responsável pelo
              diagnóstico e tratamentode diversas condições médicas, incluindo
              diabetes, obesidade e transtornos alimentares. Além disso, integra
              a realização de exames específicos e a prescrição de dietas
              personalizadas com tratamentos complementares, visando um cuidado
              de saúde abrangente e eficaz.
            </p>
          </div>
        </div>

        {/* 2ª coluna texto */}
        <div className="items-center p-10 md:grid md:w-1/2 md:max-w-5xl md:gap-8 md:p-20">
          <div className="text-left">
            <h1 className="text-center text-3xl font-bold md:mb-5 md:text-4xl">
              Nutricionista
            </h1>
            <p className="text-justify text-lg md:text-xl">
              Seu foco está na elaboração de planos alimentares personalizados e
              na orientação sobre hábitos alimentares saudáveis. O trabalho é
              voltado para a prevenção e o manejo de doenças por meio da
              alimentação, com o objetivo de melhorar a saúde,prevenir
              enfermidades e tratar condições que podem ser controladas através
              de ajustes na dieta, como obesidade e intolerâncias alimentares.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutriNutrologo;
