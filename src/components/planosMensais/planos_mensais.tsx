import CardPlanos from "./components/card";

function Planos_Mensais() {
  return (
    <div className="container-xl flex min-h-96 flex-col items-center py-10" id="planos">
      <div className="flex flex-col gap-10 md:flex-row md:gap-10">
        {" "}
        {/* Changed to flex-col for smaller screens */}
        <CardPlanos
          titulo={"Essencial"}
          beneficios={[
            "Consulta Nutricionista Mensal",
            "Consulta Nutrologa Mensal",
            "Plano alimentar mensal",
          ]}
          valor={"50,00"}
        />
        <CardPlanos
          titulo={"Avançado"}
          beneficios={[
            "Consulta Nutri quinzenal",
            "Consulta Nutrologa Mensal",
            "Plano alimentar quinzenal",
            "Protocolo de suplementação",
          ]}
          valor={"125,00"}
        />
        <CardPlanos
          titulo={"Premium"}
          beneficios={[
            "Consulta Nutri semanais",
            "Consulta Nutrologa Mensal",
            "Plano alimentar semanais",
            "Protocolo de suplementação",
            "Plano mensal de exercícios",
            "Acompanhamento com Personal Trainer",
          ]}
          valor={"125,00"}
        />
      </div>
    </div>
  );
}

export default Planos_Mensais;
