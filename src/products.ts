export const productCategories = [
  "Pasta",
  "Riso e cereali",
  "Sughi e condimenti",
  "Colazione",
  "Bevande",
  "Acqua",
  "Latticini",
  "Carne",
  "Pesce",
  "Frutta",
  "Verdura",
  "Surgelati",
  "Prodotti per la casa",
  "Igiene personale",
  "Auto",
  "Brico",
  "Giocattoli",
  "Cancelleria",
  "Teleria",
  "Intimo",
  "Banco freschi",
  "Pulizia per la casa",
  "Libri",
  "Animaleria",
  "Casalinghi",
  "Snack",
  "Dolciumi",
  "Profumeria",
  "Prima infanzia",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type ProductVariant = {
  id: string;
  name: string;
  category: ProductCategory;
  aisle: string;
  department: string;
  landmark: string;
};

export const pastaVariants: ProductVariant[] = [
  {
    id: "pasta-normale",
    name: "Pasta normale",
    category: "Pasta",
    aisle: "Corsia 7",
    department: "Pasta e prodotti secchi",
    landmark: "Riso e legumi",
  },
  {
    id: "pasta-senza-glutine",
    name: "Pasta senza glutine",
    category: "Pasta",
    aisle: "Corsia 3",
    department: "Prodotti senza glutine",
    landmark: "Prodotti biologici",
  },
  {
    id: "pasta-fresca",
    name: "Pasta fresca",
    category: "Pasta",
    aisle: "Banco frigo",
    department: "Banco frigo",
    landmark: "Latticini",
  },
  {
    id: "pasta-all-uovo",
    name: "Pasta all'uovo",
    category: "Pasta",
    aisle: "Corsia 8",
    department: "Pasta e prodotti secchi",
    landmark: "Sughi e condimenti",
  },
];
