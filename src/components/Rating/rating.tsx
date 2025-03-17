"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Star from "@mui/icons-material/Star";

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

const Avaliacao = () => {
  const [value, setValue] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
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
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default Avaliacao;
