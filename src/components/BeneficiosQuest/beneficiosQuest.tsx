import { Grid2x2Check } from "lucide-react";
import Card from "./components/card";

const BeneficiosQuest = () => {
  return (
    <div className="my-[50px] flex flex-col items-center justify-center bg-white text-center"id="questionario">
      <h1 className="text-verde mb-6 text-4xl font-bold">
        Benefícios do nosso questionário
      </h1>
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card
          icone={"/assets/images/icone prancheta.png"}
          titulo={"Personalização:"}
          texto={
            "Um questionário ajuda a identificar quais suplementos podem ser mais benéficos para uma pessoa, com base em suas necessidades individuais, histórico de saúde e objetivos."
          }
        />
        <Card
          icone={"/assets/images/icone-saude.png"}
          titulo={"Identificação de Deficiências:"}
          texto={
            "Ajuda a descobrir possíveis deficiências nutricionais ou lacunas na dieta, permitindo a escolha de suplementos específicos para abordar essas carências."
          }
        />
        <Card
          icone={"/assets/images/icone-porquinho.png"}
          titulo={"Eficiência de Custo:"}
          texto={
            "Ajuda a evitar gastos desnecessários com suplementos que não são necessários ou que não serão eficazes para a situação específica da pessoa."
          }
        />
      </div>
    </div>
  );
};

export default BeneficiosQuest;
