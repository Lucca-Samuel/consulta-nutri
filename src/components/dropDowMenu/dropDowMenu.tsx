"use client";

import { useState } from "react"; // Adiciona a importação do useState
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const DropdownEspecializacao = ({ items, estilo, texto, value, onChange }) => {
  const [search, setSearch] = useState(""); // Agora o useState está definido
  const especializacoes = items;

  // Filtra as especializações com base na busca
  const filteredEspecializacoes = especializacoes.filter((especializacao) =>
    especializacao.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${estilo} flex w-full justify-between rounded-md border px-4 py-2 text-left shadow-sm`}
      >
        {value || texto} {/* Usa o valor ou o texto default */}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 max-h-[300px] w-full overflow-y-auto">
        <div className="p-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border px-2 py-1 text-sm"
          />
        </div>
        {filteredEspecializacoes.map((especializacao, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => onChange({ target: { value: especializacao } })} // Passa o valor selecionado para o onChange do componente pai
          >
            {especializacao}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownEspecializacao;
