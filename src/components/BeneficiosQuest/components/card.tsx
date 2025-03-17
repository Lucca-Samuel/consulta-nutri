import Image from "next/image";

const Card = ({ icone, titulo, texto }) => {
  return (
    <div className="bg-verde m-4 flex w-full max-w-xs flex-col items-center rounded-[50px] p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <Image src={icone} alt="Ícone" width={50} height={50} />
      </div>
      <h6 className="mb-2 text-center text-xl font-bold">{titulo}</h6>
      <p className="text-center text-lg">{texto}</p>
    </div>
  );
};

export default Card;
