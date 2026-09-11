type StoreMapProps = {
  highlightedAisle: string;
};

function StoreMap({ highlightedAisle }: StoreMapProps) {
  const isAisle7Highlighted = highlightedAisle === "Corsia 7";

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

        <rect
          x="40"
          y="80"
          width="150"
          height="60"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="115"
          y="115"
          textAnchor="middle"
          fontSize="18"
          fill="#166534"
        >
          INGRESSO
        </text>

        <rect
          x="40"
          y="180"
          width="120"
          height="80"
          rx="10"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="100"
          y="225"
          textAnchor="middle"
          fontSize="18"
          fill="#92400e"
        >
          FRUTTA
        </text>

        <rect
          x="40"
          y="290"
          width="120"
          height="80"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="100"
          y="335"
          textAnchor="middle"
          fontSize="18"
          fill="#166534"
        >
          VERDURA
        </text>

        <rect
          x="650"
          y="180"
          width="110"
          height="190"
          rx="10"
          fill="#fee2e2"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="705"
          y="280"
          textAnchor="middle"
          fontSize="18"
          fill="#991b1b"
        >
          CASSE
        </text>

        <rect
          x="200"
          y="90"
          width="80"
          height="300"
          rx="8"
          fill="#e2e8f0"
          stroke="#475569"
          strokeWidth="2"
        />

        <text
          x="240"
          y="240"
          textAnchor="middle"
          fontSize="16"
          fill="#334155"
          transform="rotate(-90 240 240)"
        >
          CORSIA 6
        </text>

        <rect
          x="310"
          y="90"
          width="80"
          height="300"
          rx="8"
          fill={isAisle7Highlighted ? "#2563eb" : "#e2e8f0"}
          stroke={isAisle7Highlighted ? "#1e3a8a" : "#475569"}
          strokeWidth="4"
        />

        <text
          x="350"
          y="240"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={isAisle7Highlighted ? "#ffffff" : "#334155"}
          transform="rotate(-90 350 240)"
        >
          CORSIA 7
        </text>

        <rect
          x="420"
          y="90"
          width="80"
          height="300"
          rx="8"
          fill="#e2e8f0"
          stroke="#475569"
          strokeWidth="2"
        />

        <text
          x="460"
          y="240"
          textAnchor="middle"
          fontSize="16"
          fill="#334155"
          transform="rotate(-90 460 240)"
        >
          CORSIA 8
        </text>

        <rect
          x="530"
          y="90"
          width="80"
          height="300"
          rx="8"
          fill="#e2e8f0"
          stroke="#475569"
          strokeWidth="2"
        />

        <text
          x="570"
          y="240"
          textAnchor="middle"
          fontSize="16"
          fill="#334155"
          transform="rotate(-90 570 240)"
        >
          CORSIA 9
        </text>

        <rect
          x="200"
          y="410"
          width="410"
          height="50"
          rx="10"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="405"
          y="442"
          textAnchor="middle"
          fontSize="18"
          fill="#92400e"
        >
          PANETTERIA
        </text>
      </svg>
    </section>
  );
}

export default StoreMap;
