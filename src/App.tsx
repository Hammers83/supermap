import { useState } from "react";

type ProductVariant = {
  name: string;
  aisle: string;
};

const pastaVariants: ProductVariant[] = [
  {
    name: "Pasta normale",
    aisle: "Corsia 7",
  },
  {
    name: "Pasta senza glutine",
    aisle: "Corsia 3",
  },
  {
    name: "Pasta fresca",
    aisle: "Banco frigo",
  },
  {
    name: "Pasta all'uovo",
    aisle: "Corsia 8",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>(null);

  const isPastaSearch = search.trim().toLowerCase() === "pasta";

  function handleVariantSelect(variant: ProductVariant) {
    setSelectedVariant(variant);
  }

  return (
    <main>
      <h1>SuperMap</h1>

      <p>
        Trova rapidamente i prodotti all'interno del supermercato.
      </p>

      <input
        type="search"
        placeholder="Cerca un prodotto..."
        aria-label="Cerca un prodotto"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setSelectedVariant(null);
        }}
      />

      {isPastaSearch && (
        <section>
          <h2>Che tipo di pasta cerchi?</h2>

          <ul>
            {pastaVariants.map((variant) => (
              <li key={variant.name}>
                <button
                  type="button"
                  onClick={() => handleVariantSelect(variant)}
                >
                  {variant.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {selectedVariant && (
        <section>
          <h2>{selectedVariant.name}</h2>

          <p>
            📍 {selectedVariant.aisle}
          </p>
        </section>
      )}
    </main>
  );
}

export default App;
