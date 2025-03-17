"use client";

import { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 425); // Ajuste para o tamanho desejado
    };

    // Verifica o tamanho da tela na montagem
    checkScreenSize();

    // Adiciona o ouvinte de resize
    window.addEventListener("resize", checkScreenSize);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMobile ? (
    <div className="bg-banner relative flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="flex w-full max-w-full flex-col items-center">
          <Image
            className="max-w-full pt-10 sm:pt-20 md:pt-40"
            src="/assets/images/logo_2.png"
            alt="banner"
            width={450}
            height={450}
          />
          <p className="cor mt-4 text-center text-base leading-relaxed text-white sm:mt-8 sm:text-left sm:text-lg md:text-xl">
            Consultas personalizadas com nutrologistas e nutricionistas <br />
            dedicados ao seu bem-estar. Alcance uma vida mais saudável <br />
            com o apoio especializado e planos sob medida.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-banner relative h-[100vh] w-full">
      <div className="flex justify-start">
        <div className="container mx-auto">
          <Image
            className="pt-40"
            src="/assets/images/logo_2.png"
            alt="banner"
            width={450}
            height={450}
          />
          <p className="justify-center text-justify text-xl text-white">
            Consultas personalizadas com nutrologistas e nutricionistas <br />{" "}
            dedicados ao seu bem-estar. Alcance uma vida mais saudável <br />
            com o apoio especializado e planos sob medida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
