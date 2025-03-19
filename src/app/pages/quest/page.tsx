"use client";

import CardQuest from "./components/card";
import Link from "next/link";

const Quest = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center gap-[50px]">
      <Link href={"/pages/cadastroPro"}>
        <CardQuest
          imagem={"/assets/images/med-img.jpeg"}
          alter={"Imagem do médico"}
          titulo={"Sou um profissional"}
          text={
            "Faça parte da nossa equipe de especialistas em nutrição e aproveite a oportunidade de ampliar sua rede de clientes. Como profissional afiliado, você poderá oferecer seus serviços em uma plataforma confiável, com ferramentas para gerenciar consultas, planejar dietas personalizadas e acompanhar o progresso de seus pacientes de maneira prática e organizada. Vamos juntos promover saúde e transformar vidas!"
          }
          estilo={undefined}
        />
      </Link>

      <Link href={"/pages/cadastroClie"}>
        <CardQuest
          imagem={"/assets/images/paciente-img.jpeg"}
          alter={"Imagem do paciente"}
          titulo={"Sou um Paciente"}
          text={
            "Aqui, você encontrará um espaço totalmente dedicado ao seu bem-estar e saúde. Ao se cadastrar como paciente, terá acesso a consultas personalizadas, recomendações baseadas em seus objetivos e um acompanhamento profissional que ajudará você a alcançar suas metas de forma saudável e eficiente. Com um ambiente seguro e acolhedor, estamos prontos para caminhar junto com você nessa jornada rumo a uma melhor qualidade de vida!"
          }
          estilo={undefined}
        />
      </Link>
    </div>
  );
};

export default Quest;
