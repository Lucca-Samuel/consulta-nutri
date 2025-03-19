import Button from "@/components/Button/button";
import "./style.css";

const CardPlanos = ({ titulo, beneficios, valor }) => {
  return (
    <div className="sombraCard bg-verde flex h-full min-h-[450px] max-w-xs flex-col justify-between rounded-3xl p-6 text-center text-white">
      {" "}
      {/* Changed max-w-sm to max-w-xs for better responsiveness */}
      <div>
        <h1 className="mb-4 text-xl font-bold">{titulo}</h1>
        <ul className="mb-4 min-h-[120px] space-y-1 text-left">
          {beneficios.map((beneficio, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✓</span>
              {beneficio}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 text-lg">
        <p className="text-left">Por apenas</p>
        <p className="text-center text-2xl font-semibold">R$ {valor}</p>
        <p className="text-right">Mensais</p>
      </div>
      <Button
        texto={"ASSINE JÁ"}
        estilo={"mt-auto botao-laranja"}
        funcao={undefined}
      />
    </div>
  );
};

export default CardPlanos;
