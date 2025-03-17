"use client";
import Button from "../Button/button";
import "./style.css";

const Card = ({ titulo, texto, button }) => {
  return (
    <div className="cardBg bg-verde md:mr-24 md:mt-[270px] flex w-[600px] flex-col content-end items-center justify-self-end rounded-[50px] px-5 py-6 text-center text-white shadow-lg">
      <h6 className="cardTitulo mb-5 mt-3 md:text-center text-4xl font-bold">{titulo}</h6>
      <div className="cardTexto text-center text-xl">{texto}</div>
      <div>
        <Button texto={"Vamos começar"} estilo={"botao-laranja"} />
      </div>
    </div>
  );
};

export default Card;

