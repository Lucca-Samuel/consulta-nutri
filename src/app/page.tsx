import Banner from "@/components/Banner/banner";
import BeneficiosPlano from "@/components/beneficiosPlano/beneficiosPlano";
import BeneficiosQuest from "@/components/BeneficiosQuest/beneficiosQuest";
import Calculadora from "@/components/Calculadora/calculadora";
import NutriNutrologo from "@/components/nutriNutrologo/nutriNutrologo";
import Sobre from "@/components/Sobre/Sobre";
import Suplementacao from "@/components/suplementacao/suplementacao";
import Receitas from "@/components/Receitas/receita";
import CarouselDoutores from "@/components/carouselDoutores/carousel";
import Planos_Mensais from "@/components/planosMensais/planos_mensais";
import Teleconsultas from "@/components/Teleconsultas/teleconsultas";

function Home() {
  const carouselItems = [
    {
      image: "/assets/images/carolina.png",
      title: "Dra. Carolina, Nutricionista",
      title2: "Graduação em Nutrição pela Unitau.",
      description:
        "Sou médica especializada em Nutrologia, focada no diagnóstico e tratamento de distúrbios alimentares e doenças relacionadas à nutrição. Desenvolvo planos alimentares personalizados e educo os pacientes sobre hábitos saudáveis.",
    },
    {
      image: "/assets/images/erik.png",
      title: "Dr. Erik, Nutrólogo.",
      title2: "Graduação em Medicina pela Uniter, Especialização em Nutrologia",
      description:
        "Sou médico especializado em Nutrologia, com um compromisso em promover a saúde através da nutrição. Minha prática é dedicada ao diagnóstico e tratamento de condições relacionadas à alimentação, bem como à promoção de hábitos alimentares saudáveis.",
    },
    {
      image: "/assets/images/larissa.png",
      title: "Dra. Larissa, Nutróloga",
      title2: "Medicina pela USP, Especialização em Nutrologia.",
      description:
        "Sou médica especializada em Nutrologia, focada no diagnóstico e tratamento de distúrbios alimentares e doenças relacionadas à nutrição. Desenvolvo planos alimentares personalizados e educo os pacientes sobre hábitos saudáveis.",
    },
  ];

  return (
    <div className="h-7">
      <Banner />
      <Sobre />
      <NutriNutrologo />
      <CarouselDoutores items={carouselItems} />
      <BeneficiosQuest />
      <Suplementacao />
      <Calculadora />
      <Receitas />
      <BeneficiosPlano />
      <Planos_Mensais />
      <Teleconsultas />
    </div>
  );
}
export default Home;
