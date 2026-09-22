import { useState } from "react";
import StoreMap from "./StoreMap";
import { allProducts, type ProductVariant } from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>(null);

  const normalizedSearch = search.trim().toLowerCase();

  const matchingProducts = allProducts.filter((product) => {
    const productName = product.name.toLowerCase();
    const categoryName = product.category.toLowerCase();

    return (
      productName.includes(normalizedSearch) ||
      categoryName.includes(normalizedSearch)
    );
  });

  const hasSearchResults =
    normalizedSearch !== "" && matchingProducts.length > 0;

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

      {hasSearchResults && (
        <section>
          <h2>Risultati della ricerca</h2>

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
