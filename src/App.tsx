import { useState } from "react";
import StoreMap from "./StoreMap";
import { allProducts, type ProductVariant } from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>(null);

  const normalizedSearch = search.trim().toLowerCase();

  const matchingProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === normalizedSearch
  );

  const hasCategorySearch = normalizedSearch !== "" && matchingProducts.length > 0;

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

      {hasCategorySearch && (
        <section>
          <h2>Che tipo di {search.trim().toLowerCase()} cerchi?</h2>

          <ul>
            {matchingProducts.map((variant) => (
              <li key={variant.id}>
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
        <>
          <section>
            <h2>{selectedVariant.name}</h2>

            <p>📍 {selectedVariant.aisle}</p>

            <p>
              <strong>Reparto:</strong>{" "}
              {selectedVariant.department}
            </p>

            <p>
              <strong>Vicino a:</strong>{" "}
              {selectedVariant.landmark}
            </p>
          </section>

          <StoreMap highlightedAisle={selectedVariant.aisle} />
        </>
      )}
    </main>
  );
}

export default App;
