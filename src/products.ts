export type ProductVariant = {
  id: string;
  name: string;
  aisle: string;
  department: string;
  landmark: string;
};

export const pastaVariants: ProductVariant[] = [
  {
    id: "pasta-normale",
    name: "Pasta normale",
    aisle: "Corsia 7",
    department: "Pasta e prodotti secchi",
    landmark: "Riso e legumi",
  },
  {
    id: "pasta-senza-glutine",
    name: "Pasta senza glutine",
    aisle: "Corsia 3",
    department: "Prodotti senza glutine",
    landmark: "Prodotti biologici",
  },
  {
    id: "pasta-fresca",
    name: "Pasta fresca",
    aisle: "Banco frigo",
    department: "Banco frigo",
    landmark: "Latticini",
  },
  {
    id: "pasta-all-uovo",
    name: "Pasta all'uovo",
    aisle: "Corsia 8",
    department: "Pasta e prodotti secchi",
    landmark: "Sughi e condimenti",
  },
];
