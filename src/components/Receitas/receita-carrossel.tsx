"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import receitasd from "@/components/Receitas/Data/data";
import ReceitaItem from "./receita-item";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const ReceitaCarrossel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 648); // Ajuste para o tamanho desejado
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
    <div className="flex items-center justify-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-5xl"
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: Math.ceil(receitasd.length / 1) }).map(
            // Change to 1 to display one item at a time
            (_, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="w-full p-2">
                  {" "}
                  {/* Removed basis classes for single item display */}
                  <Card className="flex h-96 w-full flex-col">
                    <div className="flex h-full items-center justify-center p-4">
                      <ReceitaItem
                        categoria={{
                          ...receitasd[index],
                          avaliacao: "0",
                        }}
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-5xl"
      >
        {" "}
        {/* Aumenta a largura máxima do carrossel */}
        <CarouselContent className="-ml-1">
          {Array.from({ length: Math.ceil(receitasd.length / 2) }).map(
            (_, index) => (
              <CarouselItem key={index} className="flex justify-center">
                {/* Primeiro item do carrossel */}
                <div className="p-2 md:basis-1/2 lg:basis-1/2">
                  <Card className="flex h-96 w-full flex-col">
                    {" "}
                    {/* Aumenta a altura do cartão */}
                    <div className="flex h-full items-center justify-center p-4">
                      {" "}
                      {/* Define a altura do contêiner */}
                      <ReceitaItem
                        categoria={{
                          ...receitasd[index * 2],
                          avaliacao: "0",
                        }}
                      />
                    </div>
                  </Card>
                </div>
                {/* Segundo item do carrossel, se existir */}
                {index * 2 + 1 < receitasd.length && (
                  <div className="p-2 md:basis-1/2 lg:basis-1/2">
                    <Card className="flex h-96 w-full flex-col">
                      {" "}
                      {/* Aumenta a altura do cartão */}
                      <div className="flex h-full items-center justify-center p-4">
                        <ReceitaItem
                          categoria={{
                            ...receitasd[index * 2 + 1],
                            avaliacao: "0",
                          }}
                        />
                      </div>
                    </Card>
                  </div>
                )}
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReceitaCarrossel;
