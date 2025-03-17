import CardBeneficio from "./cardBeneficio";
import Image from "next/image";
import "./style.css";

const BeneficiosPlano = () => {
  return (
    <>
      <div className="container mx-auto my-auto flex flex-wrap items-center justify-between" id="beneficios_planos">
        {/* Coluna da Esquerda: Ícones e Título */}
        <div className="flex w-full flex-col px-6 md:w-1/2">
          {/* Título e Parágrafo */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-orange mb-3 text-4xl font-bold">
              Transforme Sua Saúde Com <br /> Nossos Planos De Teleconsulta!
            </h1>
            <p className="text-verde text-lg">
              Você está pronto para atingir seus objetivos de saúde e bem-estar
              de maneira prática e personalizada? Com nosso serviço de
              teleconsulta com nutrólogos e nutricionistas, você pode fazer isso
              sem sair de casa!
            </p>
          </div>

          {/* Ícones em Duas Linhas de Dois Ícones Cada */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <CardBeneficio
              image="/assets/images/tele_consulta.png"
              larg={250}
              alt={250}
              titulo="Consulta Online com especialistas"
              texto={
                <>
                  Receba orientação personalizada <br /> de nutrólogos e
                  nutricionistas <br /> altamente qualificados.
                </>
              }
            />
            <CardBeneficio
              image="/assets/images/1410534.png"
              larg={130}
              alt={130}
              titulo="Planos de Alimentação Customizados"
              texto={
                <>
                  Adapte sua dieta às suas <br /> necessidades e metas
                  específicas.
                </>
              }
            />
            <CardBeneficio
              image="/assets/images/acompanhamento.png"
              larg={250}
              alt={250}
              titulo="Acompanhamento Contínuo"
              texto={
                <>
                  Monitore seu progresso e <br /> ajuste suas estratégias <br />
                  com consultas regulares
                </>
              }
            />
            <CardBeneficio
              image="/assets/images/24.png"
              larg={250}
              alt={250}
              titulo="Acesso 24/7"
              texto={
                <>
                  Tire suas dúvidas e receba suporte <br /> quando precisar, com
                  acesso <br /> ao nosso portal a qualquer hora.
                </>
              }
            />
          </div>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="mt-10 flex w-full items-center justify-center px-6 md:mt-0 md:w-1/2">
          <div className="bg-beneficios relative w-full max-w-md rounded-3xl">
            <Image
              src="/assets/images/AdobeStock_569218531.png"
              alt="Médico com frutas"
              width={600}
              height={600}
              className="rounded-3xl"
            />
            {/* Texto Consultas 24H */}
            <div className="bg-laranja absolute right-0 top-0 -mt-10 mr-10 flex h-28 w-52 items-center justify-center rounded-3xl">
              <p className="text-center text-2xl font-bold text-white">
                Consultas <br /> 24H
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiosPlano;
