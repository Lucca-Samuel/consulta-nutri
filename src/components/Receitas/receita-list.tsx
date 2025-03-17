import receitasd from "@/components/Receitas/Data/data";
import ReceitaItem from "./receita-item";

const ListReceita = () => {
  return (
    <div>
      {receitasd.map((receita) => (
        <ReceitaItem
          key={receita.id}
          categoria={{
            ...receita,
            avaliacao: JSON.stringify(receita.avaliacao), // Convertendo o objeto para string
          }}
        />
      ))}
    </div>
  );
};

export default ListReceita;
