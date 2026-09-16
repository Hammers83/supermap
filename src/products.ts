export type ProductVariant = {
  name: string;
  aisle: string;
  department: string;
  landmark: string;
};

export const pastaVariants: ProductVariant[] = [
  {
    name: "Pasta normale",
    aisle: "Corsia 7",
    department: "Pasta e prodotti secchi",
    landmark: "Riso e legumi",
  },
  {
    name: "Pasta senza glutine",
    aisle: "Corsia 3",
    department: "Prodotti senza glutine",
    landmark: "Prodotti biologici",
  },
  {
    name: "Pasta fresca",
    aisle: "Banco frigo",
    department: "Banco frigo",
    landmark: "Latticini",
  },
  {
    name: "Pasta all'uovo",
    aisle: "Corsia 8",
    department: "Pasta e prodotti secchi",
    landmark: "Sughi e condimenti",
  },
];
