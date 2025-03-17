"use client";

import Button from "../Button/button";
import InputM from "../inputs/inputM";
import RadioButtonGroup from "./components/radioButton";
import ResultsCard from "./components/resultCard";
import { useState } from "react";

const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [atividade, setAtividade] = useState("");
  const [resultados, setResultados] = useState([
    { label: "TMB", value: "" },
    { label: "Massa Magra", value: "" },
    { label: "Gasto Calórico", value: "" },
    { label: "Peso Ideal", value: "" },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(e.target.value);
  };

  const handleRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(e.target.value);
  };

  const calcularTMB = () => {
    if (
      peso.trim() === "" ||
      altura.trim() === "" ||
      idade.trim() === "" ||
      sexo.trim() === "" ||
      atividade.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const idadeNum = parseInt(idade);

    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum)) {
      alert("Por favor, insira valores válidos para peso, altura e idade.");
      return;
    }

    let tmb = 0;
    if (sexo === "masculino") {
      tmb = 10 * pesoNum + 6.25 * alturaNum - 5 * idadeNum + 5;
    } else if (sexo === "feminino") {
      tmb = 10 * pesoNum + 6.25 * alturaNum - 5 * idadeNum - 161;
    }

    let fatorAtividade = 1.2;
    switch (atividade) {
      case "poucoAtiva":
        fatorAtividade = 1.375;
        break;
      case "moderadamenteAtiva":
        fatorAtividade = 1.55;
        break;
      case "muitoAtiva":
        fatorAtividade = 1.725;
        break;
    }

    const gastoCalorico = tmb * fatorAtividade;
    const pesoIdeal = (alturaNum / 100) ** 2 * 22;

    setResultados([
      { label: "TMB", value: `${tmb.toFixed(2)} kcal` },
      { label: "Massa Magra", value: "50 kg" },
      { label: "Gasto Calórico", value: `${gastoCalorico.toFixed(2)} kcal` },
      { label: "Peso Ideal", value: `${pesoIdeal.toFixed(2)} kg` },
    ]);
  };

  return (
    <div className="container-xl mx-auto my-8 grid grid-cols-1 gap-6 md:grid-cols-2" id="calculadora">
      <div className="bg-verde mx-auto flex flex-col items-center rounded-lg p-6 shadow-md md:p-10">
        <InputM
          label="Peso (kg)"
          placeholder="Digite seu peso"
          type="number"
          value={peso}
          onChange={(e) => handleInputChange(e, setPeso)}
          required
        />
        <InputM
          label="Altura (cm)"
          placeholder="Digite sua altura"
          type="number"
          value={altura}
          onChange={(e) => handleInputChange(e, setAltura)}
          required
        />
        <InputM
          label="Idade (anos)"
          placeholder="Digite sua idade"
          type="number"
          value={idade}
          onChange={(e) => handleInputChange(e, setIdade)}
          required
        />

        <RadioButtonGroup
          label="Sexo"
          name="sexo"
          options={[
            { label: "Masculino", value: "masculino" },
            { label: "Feminino", value: "feminino" },
          ]}
          onChange={(e) => handleRadioChange(e, setSexo)}
        />

        <RadioButtonGroup
          label="Nível de Atividade Física"
          name="atividade"
          options={[
            { label: "Pessoa Sedentária", value: "sedentario" },
            { label: "Pouco Ativa", value: "poucoAtiva" },
            { label: "Moderadamente Ativa", value: "moderadamenteAtiva" },
            { label: "Muito Ativa", value: "muitoAtiva" },
          ]}
          onChange={(e) => handleRadioChange(e, setAtividade)}
        />

        <Button
          texto="Calcular TMB"
          estilo="botao-laranja"
          funcao={calcularTMB}
        />
      </div>

      <div className="mx-auto p-4 text-justify">
        <h1 className="text-orange text-2xl font-bold md:text-3xl">
          Calculadora de Taxa <br /> Metabólica Basal (TMB)
        </h1>
        <p className="text-verde mt-4 text-lg md:text-xl">
          A Taxa Metabólica Basal (TMB) é o mínimo de energia <br />
          necessária para manter as funções do organismo em repouso, <br /> como
          os batimentos cardíacos, a pressão arterial,
          <br /> a respiração e a manutenção da temperatura corporal.
          <br />
          <br />
          Os valores da taxa metabólica basal variam de acordo com
          <br /> a idade, peso e o sexo e servem para atender o total de energia{" "}
          <br />
          que o corpo gasta por dia, sendo uma ferramenta útil para auxiliar
          <br /> no planejamento alimentar de pessoas que desejam manter
          <br /> o peso, engordar ou emagrecer.
        </p>
        <div className="mt-4 h-auto w-full max-w-md rounded-3xl p-4">
          <ResultsCard title="Resultados" data={resultados} />
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
