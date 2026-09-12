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

        {/* Corridoi di passaggio */}
        <rect
          x="280"
          y="90"
          width="30"
          height="270"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        <rect
          x="390"
          y="90"
          width="30"
          height="270"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        <rect
          x="500"
          y="90"
          width="30"
          height="270"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        <rect
          x="610"
          y="90"
          width="40"
          height="270"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1"
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

        {/* Porte ingresso */}
        <rect
          x="82"
          y="128"
          width="16"
          height="10"
          fill="#ffffff"
          stroke="#166534"
          strokeWidth="2"
        />

        <rect
          x="112"
          y="128"
          width="16"
          height="10"
          fill="#ffffff"
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

        {/* Indicatore Banco frigo */}
        {isHighlighted("Banco frigo") && (
          <text
            x="105"
            y="370"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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

        {/* Scaffalature Corsia 6 */}
        <line
          x1="215"
          y1="120"
          x2="215"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="265"
          y1="120"
          x2="265"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="215"
          y1="130"
          x2="235"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="130"
          x2="265"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="215"
          y1="170"
          x2="235"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="170"
          x2="265"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="215"
          y1="210"
          x2="235"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="210"
          x2="265"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="215"
          y1="250"
          x2="235"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="250"
          x2="265"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="215"
          y1="290"
          x2="235"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="290"
          x2="265"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="215"
          y1="330"
          x2="235"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="245"
          y1="330"
          x2="265"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
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

        {/* Indicatore Corsia 6 */}
        {isHighlighted("Corsia 6") && (
          <text
            x="240"
            y="78"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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

        {/* Scaffalature Corsia 7 */}
        <line
          x1="325"
          y1="120"
          x2="325"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="375"
          y1="120"
          x2="375"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="325"
          y1="130"
          x2="345"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="130"
          x2="375"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="325"
          y1="170"
          x2="345"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="170"
          x2="375"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="325"
          y1="210"
          x2="345"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="210"
          x2="375"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="325"
          y1="250"
          x2="345"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="250"
          x2="375"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="325"
          y1="290"
          x2="345"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="290"
          x2="375"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="325"
          y1="330"
          x2="345"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="355"
          y1="330"
          x2="375"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
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

        {/* Indicatore Corsia 7 */}
        {isHighlighted("Corsia 7") && (
          <text
            x="350"
            y="78"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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

        {/* Scaffalature Corsia 8 */}
        <line
          x1="435"
          y1="120"
          x2="435"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="485"
          y1="120"
          x2="485"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="435"
          y1="130"
          x2="455"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="130"
          x2="485"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="435"
          y1="170"
          x2="455"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="170"
          x2="485"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="435"
          y1="210"
          x2="455"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="210"
          x2="485"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="435"
          y1="250"
          x2="455"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="250"
          x2="485"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="435"
          y1="290"
          x2="455"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="290"
          x2="485"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="435"
          y1="330"
          x2="455"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="465"
          y1="330"
          x2="485"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
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

        {/* Indicatore Corsia 8 */}
        {isHighlighted("Corsia 8") && (
          <text
            x="460"
            y="78"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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

        {/* Scaffalature Corsia 9 */}
        <line
          x1="545"
          y1="120"
          x2="545"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="595"
          y1="120"
          x2="595"
          y2="330"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="545"
          y1="130"
          x2="565"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="130"
          x2="595"
          y2="130"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="545"
          y1="170"
          x2="565"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="170"
          x2="595"
          y2="170"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="545"
          y1="210"
          x2="565"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="210"
          x2="595"
          y2="210"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="545"
          y1="250"
          x2="565"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="250"
          x2="595"
          y2="250"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="545"
          y1="290"
          x2="565"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="290"
          x2="595"
          y2="290"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="545"
          y1="330"
          x2="565"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
        />

        <line
          x1="575"
          y1="330"
          x2="595"
          y2="330"
          stroke="#64748b"
          strokeWidth="3"
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

        {/* Indicatore Corsia 9 */}
        {isHighlighted("Corsia 9") && (
          <text
            x="570"
            y="78"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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

        {/* Scaffali Corsia 3 */}
        <line
          x1="220"
          y1="400"
          x2="220"
          y2="440"
          stroke="#94a3b8"
          strokeWidth="3"
        />

        <line
          x1="260"
          y1="400"
          x2="260"
          y2="440"
          stroke="#94a3b8"
          strokeWidth="3"
        />

        <line
          x1="300"
          y1="400"
          x2="300"
          y2="440"
          stroke="#94a3b8"
          strokeWidth="3"
        />

        <line
          x1="340"
          y1="400"
          x2="340"
          y2="440"
          stroke="#94a3b8"
          strokeWidth="3"
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

        {/* Indicatore Corsia 3 */}
        {isHighlighted("Corsia 3") && (
          <text
            x="290"
            y="372"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

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
          y="190"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#991b1b"
        >
          CASSE
        </text>

        {/* Cassa 1 */}
        <rect
          x="660"
          y="200"
          width="90"
          height="48"
          rx="6"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <rect
          x="668"
          y="208"
          width="24"
          height="30"
          rx="3"
          fill="#fecaca"
          stroke="#991b1b"
          strokeWidth="1"
        />

        <line
          x1="700"
          y1="216"
          x2="742"
          y2="216"
          stroke="#991b1b"
          strokeWidth="3"
        />

        <line
          x1="700"
          y1="229"
          x2="742"
          y2="229"
          stroke="#f87171"
          strokeWidth="3"
        />

        <text
          x="680"
          y="228"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#991b1b"
        >
          1
        </text>

        {/* Cassa 2 */}
        <rect
          x="660"
          y="255"
          width="90"
          height="48"
          rx="6"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <rect
          x="668"
          y="263"
          width="24"
          height="30"
          rx="3"
          fill="#fecaca"
          stroke="#991b1b"
          strokeWidth="1"
        />

        <line
          x1="700"
          y1="271"
          x2="742"
          y2="271"
          stroke="#991b1b"
          strokeWidth="3"
        />

        <line
          x1="700"
          y1="284"
          x2="742"
          y2="284"
          stroke="#f87171"
          strokeWidth="3"
        />

        <text
          x="680"
          y="283"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#991b1b"
        >
          2
        </text>

        {/* Cassa 3 */}
        <rect
          x="660"
          y="310"
          width="90"
          height="48"
          rx="6"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <rect
          x="668"
          y="318"
          width="24"
          height="30"
          rx="3"
          fill="#fecaca"
          stroke="#991b1b"
          strokeWidth="1"
        />

        <line
          x1="700"
          y1="326"
          x2="742"
          y2="326"
          stroke="#991b1b"
          strokeWidth="3"
        />

        <line
          x1="700"
          y1="339"
          x2="742"
          y2="339"
          stroke="#f87171"
          strokeWidth="3"
        />

        <text
          x="680"
          y="338"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#991b1b"
        >
          3
        </text>

        {/* Cassa 4 */}
        <rect
          x="660"
          y="365"
          width="90"
          height="48"
          rx="6"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <rect
          x="668"
          y="373"
          width="24"
          height="30"
          rx="3"
          fill="#fecaca"
          stroke="#991b1b"
          strokeWidth="1"
        />

        <line
          x1="700"
          y1="381"
          x2="742"
          y2="381"
          stroke="#991b1b"
          strokeWidth="3"
        />

        <line
          x1="700"
          y1="394"
          x2="742"
          y2="394"
          stroke="#f87171"
          strokeWidth="3"
        />

        <text
          x="680"
          y="393"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#991b1b"
        >
          4
        </text>

        {/* Zona di passaggio davanti alle casse */}
        <rect
          x="650"
          y="425"
          width="110"
          height="35"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        <text
          x="705"
          y="447"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="#64748b"
        >
          PASSAGGIO
        </text>
      </svg>

      {/* Legenda */}
      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          border: "1px solid #cbd5e1",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
        }}
      >
        <strong>Legenda</strong>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 20px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                borderRadius: "4px",
                backgroundColor: "#2563eb",
              }}
            />
            <span>Destinazione selezionata</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                borderRadius: "4px",
                backgroundColor: "#e2e8f0",
                border: "1px solid #475569",
              }}
            />
            <span>Corsia</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                borderRadius: "4px",
                backgroundColor: "#dcfce7",
                border: "1px solid #166534",
              }}
            />
            <span>Area verde</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                borderRadius: "4px",
                backgroundColor: "#fef3c7",
                border: "1px solid #92400e",
              }}
            />
            <span>Reparto</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "18px",
                height: "18px",
                display: "inline-block",
                borderRadius: "4px",
                backgroundColor: "#fee2e2",
                border: "1px solid #991b1b",
              }}
            />
            <span>Casse</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreMap;
