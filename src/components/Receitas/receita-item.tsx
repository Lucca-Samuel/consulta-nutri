"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Star from "@mui/icons-material/Star";
import Image from "next/image";

interface ReceitaItemProps {
  categoria: {
    id: string;
    name: string;
    imageUrl: string;
    avaliacao: string;
  };
}

const labels: { [id: string]: string } = {
  0.5: "Muito ruim",
  1: "Ruim",
  2.5: "Mediano",
  3: "Bom",
  3.5: "Muito bom",
  4: "Incrivel",
  4.5: "Excelente",
  5: "Genial",
};

const ReceitaItem = ({ categoria }: ReceitaItemProps) => {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2 rounded-lg bg-white p-4">
      {" "}
      {/* Added max-w-xs for responsiveness */}
      <Image
        src={categoria.imageUrl}
        alt={categoria.name}
        height={200}
        width={200}
        className="rounded-lg object-cover"
      />
      <span className="truncate text-center text-xl font-semibold">
        {categoria.name}
      </span>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<Star style={{ opacity: 0.5 }} fontSize="inherit" />}
          />
          {value != null && (
            <Box sx={{ ml: 2, fontSize: "0.875rem" }}>
              {labels[hover !== -1 ? hover : value]}
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ReceitaItem;
