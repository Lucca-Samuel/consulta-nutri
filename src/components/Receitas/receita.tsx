import ReceitaCarrossel from "./receita-carrossel";
import Button from "../Button/button";
import "@/app/globals.css";
import "./style.css";

const Receitas = () => {
  return (
    <div
      className="container-xl flex flex-col items-center py-10"
      id="receitas"
    >
      <h1 className="text-verde mb-4 text-center text-4xl font-semibold md:text-6xl">
        Receitas <span className="text-orange">saudáveis</span> especialmente
        para você
      </h1>

      <div className="w-full">
        <ReceitaCarrossel />
      </div>

      <Button
        texto={"Baixar Ebook"}
        estilo={
          "w-[300px] h-[50px] rounded-full bg-orange-400 px-8 py-2 font-semibold text-white botao-laranja"
        }
        funcao={undefined}
      />
    </div>
  );
};

export default Receitas;
