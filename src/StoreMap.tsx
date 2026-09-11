type StoreMapProps = {
  highlightedAisle: string;
};

function StoreMap({ highlightedAisle }: StoreMapProps) {
  const isHighlighted = (aisle: string) =>
    highlightedAisle === aisle;

  return (
    <section>
      <h2>Mappa del supermercato</h2>

      <svg
        viewBox="0 0 800 500"
        role="img"
        aria-label="Mappa del supermercato"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      >
        {/* Struttura del supermercato */}
        <rect
          x="10"
          y="10"
          width="780"
          height="480"
          rx="20"
          fill="#f8fafc"
          stroke="#334155"
          strokeWidth="4"
        />

        {/* Titolo */}
        <text
          x="400"
          y="50"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#1e293b"
        >
          SUPERMERCATO
        </text>

        {/* Ingresso */}
        <rect
          x="40"
          y="80"
          width="130"
          height="60"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="105"
          y="116"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#166534"
        >
          INGRESSO
        </text>

        {/* Frutta */}
        <rect
          x="40"
          y="170"
          width="130"
          height="80"
          rx="10"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="105"
          y="216"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#92400e"
        >
          FRUTTA
        </text>

        {/* Verdura */}
        <rect
          x="40"
          y="270"
          width="130"
          height="80"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="105"
          y="316"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#166534"
        >
          VERDURA
        </text>

        {/* Banco frigo */}
        <rect
          x="40"
          y="380"
          width="130"
          height="80"
          rx="8"
          fill={
            isHighlighted("Banco frigo")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Banco frigo")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="105"
          y="424"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Banco frigo")
              ? "#ffffff"
              : "#334155"
          }
        >
          BANCO FRIGO
        </text>

        {/* Corsia 6 */}
        <rect
          x="200"
          y="90"
          width="80"
          height="270"
          rx="8"
          fill={
            isHighlighted("Corsia 6")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Corsia 6")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="240"
          y="225"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 6")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 240 225)"
        >
          CORSIA 6
        </text>

        {/* Corsia 7 */}
        <rect
          x="310"
          y="90"
          width="80"
          height="270"
          rx="8"
          fill={
            isHighlighted("Corsia 7")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Corsia 7")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="350"
          y="225"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 7")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 350 225)"
        >
          CORSIA 7
        </text>

        {/* Corsia 8 */}
        <rect
          x="420"
          y="90"
          width="80"
          height="270"
          rx="8"
          fill={
            isHighlighted("Corsia 8")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Corsia 8")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="460"
          y="225"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 8")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 460 225)"
        >
          CORSIA 8
        </text>

        {/* Corsia 9 */}
        <rect
          x="530"
          y="90"
          width="80"
          height="270"
          rx="8"
          fill={
            isHighlighted("Corsia 9")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Corsia 9")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="570"
          y="225"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 9")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 570 225)"
        >
          CORSIA 9
        </text>

        {/* Corsia 3 */}
        <rect
          x="200"
          y="380"
          width="180"
          height="80"
          rx="8"
          fill={
            isHighlighted("Corsia 3")
              ? "#2563eb"
              : "#e2e8f0"
          }
          stroke={
            isHighlighted("Corsia 3")
              ? "#1e3a8a"
              : "#475569"
          }
          strokeWidth="4"
        />

        <text
          x="290"
          y="426"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 3")
              ? "#ffffff"
              : "#334155"
          }
        >
          CORSIA 3
        </text>

        {/* Panetteria */}
        <rect
          x="400"
          y="380"
          width="210"
          height="80"
          rx="10"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="505"
          y="426"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#92400e"
        >
          PANETTERIA
        </text>

        {/* Casse */}
        <rect
          x="650"
          y="170"
          width="110"
          height="290"
          rx="10"
          fill="#fee2e2"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="705"
          y="320"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#991b1b"
          transform="rotate(-90 705 320)"
        >
          CASSE
        </text>
      </svg>
    </section>
  );
}

export default StoreMap;
