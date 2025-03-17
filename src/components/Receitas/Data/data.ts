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

const boloDeBanana = {
  id: "1",
  name: "Bolo de banana integral",
  imageUrl: "/assets/images/bolo-banana.jpg",
  // imageUrl: "https://via.placeholder.com/200",
  avaliacao: labels,
};

const crepioca = {
  id: "2",
  name: "Crepioca",
  // imageUrl: "https://via.placeholder.com/200",
  imageUrl: "/assets/images/crepioca.jpg",
  avaliacao: labels,
};

const omelete = {
  id: "3",
  name: "Omelete Fit",
  // imageUrl: "https://via.placeholder.com/200",
  imageUrl: "/assets/images/omelete.jpg",
  avaliacao: labels,
};

const salmaoGrelhado = {
  id: "4",
  name: "Salmão Grelhado",
  // imageUrl: "https://via.placeholder.com/200",
  imageUrl: "/assets/images/salmao-grelhado.jpg",
  avaliacao: labels,
};

const brigradeiroBanana = {
  id: "5",
  name: "Brigadeiro De Banana",
  // imageUrl: "https://via.placeholder.com/200",
  imageUrl: "/assets/images/brigadeiro.jpg",
  avaliacao: labels,
};

const tortaMoranga = {
  id: "6",
  name: "Torta de Morango",
  // imageUrl: "https://via.placeholder.com/200",
  imageUrl: "/assets/images/torta-morango.jpg",
  avaliacao: labels,
};

const receitasd = [
  boloDeBanana,
  crepioca,
  omelete,
  salmaoGrelhado,
  brigradeiroBanana,
  tortaMoranga,
];

export default receitasd;
