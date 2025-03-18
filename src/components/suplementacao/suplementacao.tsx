"use client";

import Card from "./card";
import "./style.css";

const Suplementacao = () => {
  return (
    <>
      <div className="bg-suplementacao grid items-end bg-white md:pt-40">
        <div className="container-xl grid grid-cols-1 gap-10">
          <Card
            titulo={"Suplementação: Qual a melhor para sua necessidade?"}
            texto={
              <>
                <div className="md:mb-7">
                  Este questionário é uma oportunidade para conhecê-lo melhor
                  <br />e entender suas necessidades e objetivos de saúde.
                </div>
                <div className="md:mb-7">
                  Queremos garantir que você receba as melhores dicas e
                  recomendações personalizadas,
                  <br /> e para isso precisamos da sua ajuda. Suas respostas nos
                  ajudarão a oferecer <br /> informações que realmente atendem
                  às suas necessidades específicas.
                </div>
                <div>
                  Então, que tal reservar um tempinho para responder?
                  <br /> Estamos aqui para ajudar e apoiar você em sua jornada,
                  <br /> para uma saúde melhor!
                </div>
              </>
            }
            button={undefined}
          />
        </div>
      </div>
    </>
  );
};

export default Suplementacao;
