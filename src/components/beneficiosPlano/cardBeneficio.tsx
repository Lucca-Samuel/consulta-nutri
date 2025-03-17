import Image from "next/image";
const CardBeneficio = ({ image, titulo, texto, larg, alt }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white p-4 rounded-full border-2 border-verde border-solid h-[200px] w-[200px] flex justify-center items-center">
      {/* Imagem centralizada */}
      <Image src={image} width={larg} height={alt} alt={titulo} className="mb-4" />
      </div>

      <div>
        {/* Título centralizado */}
        <h3 className="text-orange text-xl font-semibold mb-2">{titulo}</h3>

        {/* Texto centralizado */}
        <p className="text-verde">{texto}</p>
      </div>
    </div>
  );
};

export default CardBeneficio;

