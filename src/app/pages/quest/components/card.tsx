import Image from "next/image";
import "./style.css";

const CardQuest = ({ imagem, titulo, text, estilo, alter }) => {
  return (
    <div className={`${estilo} card rounded-md p-5`}>
      <Image
        src={imagem}
        alt={`${alter}`}
        width={100}
        height={100}
        className="imagem"
      />
      <h1 className="text-orange text-lg">{titulo}</h1>
      <p className="text-emerald-950">{text}</p>
    </div>
  );
};

export default CardQuest;
