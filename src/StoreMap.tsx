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
        viewBox="0 0 800 600"
        role="img"
        aria-label="Mappa del supermercato"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      >
        {/* Struttura generale del supermercato */}
        <rect
          x="10"
          y="10"
          width="780"
          height="580"
          rx="20"
          fill="#f8fafc"
          stroke="#334155"
          strokeWidth="4"
        />

        {/* ==================== */}
        {/* ZONE STRUTTURALI      */}
        {/* ==================== */}

        {/* Zona superiore: reparti */}
        <rect
          x="25"
          y="55"
          width="750"
          height="105"
          rx="12"
          fill="#fffbeb"
          stroke="#d6d3d1"
          strokeWidth="2"
          strokeDasharray="6 5"
        />

        <text
          x="35"
          y="72"
          fontSize="11"
          fontWeight="bold"
          fill="#78716c"
        >
          AREA REPARTI
        </text>

        {/* Zona centrale: corsie */}
        <rect
          x="25"
          y="165"
          width="750"
          height="290"
          rx="12"
          fill="#f1f5f9"
          stroke="#d6d3d1"
          strokeWidth="2"
          strokeDasharray="6 5"
        />

        <text
          x="35"
          y="182"
          fontSize="11"
          fontWeight="bold"
          fill="#78716c"
        >
          AREA CORSIE
        </text>

        {/* Zona inferiore: casse e ingresso */}
        <rect
          x="25"
          y="460"
          width="750"
          height="95"
          rx="12"
          fill="#f8fafc"
          stroke="#d6d3d1"
          strokeWidth="2"
          strokeDasharray="6 5"
        />

        <text
          x="35"
          y="478"
          fontSize="11"
          fontWeight="bold"
          fill="#78716c"
        >
          AREA USCITA
        </text>

        {/* Titolo */}
        <text
          x="400"
          y="42"
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fill="#1e293b"
        >
          SUPERMERCATO
        </text>

        {/* ==================== */}
        {/* PARTE SUPERIORE       */}
        {/* ==================== */}

        {/* Banco / reparto superiore */}
        <rect
          x="40"
          y="65"
          width="145"
          height="55"
          rx="8"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="112"
          y="98"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          fill="#92400e"
        >
          REPARTO
        </text>

        {/* Cucina */}
        <rect
          x="200"
          y="65"
          width="145"
          height="55"
          rx="8"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="272"
          y="98"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          fill="#92400e"
        >
          CUCINA
        </text>

        {/* Pane */}
        <rect
          x="360"
          y="65"
          width="145"
          height="55"
          rx="8"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="2"
        />

        <text
          x="432"
          y="98"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          fill="#92400e"
        >
          PANE
        </text>

        {/* Panetteria */}
        <rect
          x="525"
          y="65"
          width="220"
          height="95"
          rx="10"
          fill="#fef3c7"
          stroke="#92400e"
          strokeWidth="3"
        />

        <text
          x="635"
          y="105"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#92400e"
        >
          PANETTERIA
        </text>

        <rect
          x="610"
          y="115"
          width="50"
          height="28"
          rx="4"
          fill="#ffffff"
          stroke="#92400e"
          strokeWidth="2"
        />

        {/* ==================== */}
        {/* ZONA SINISTRA        */}
        {/* ==================== */}

        {/* Frutta */}
        <rect
          x="40"
          y="145"
          width="135"
          height="80"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="107"
          y="191"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="#166534"
        >
          FRUTTA
        </text>

        {/* Verdura */}
        <rect
          x="40"
          y="240"
          width="135"
          height="80"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="107"
          y="286"
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
          y="335"
          width="135"
          height="100"
          rx="10"
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
          x="107"
          y="393"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          fill={
            isHighlighted("Banco frigo")
              ? "#ffffff"
              : "#334155"
          }
        >
          BANCO
        </text>

        <text
          x="107"
          y="413"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          fill={
            isHighlighted("Banco frigo")
              ? "#ffffff"
              : "#334155"
          }
        >
          FRIGO
        </text>

        {/* Indicatore Banco frigo */}
        {isHighlighted("Banco frigo") && (
          <text
            x="107"
            y="325"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

        {/* ==================== */}
        {/* CORSIE CENTRALI      */}
        {/* ==================== */}

        {/* Corsia 6 */}
        <rect
          x="205"
          y="175"
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

        {/* Scaffali Corsia 6 */}
        <line
          x1="220"
          y1="200"
          x2="220"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="270"
          y1="200"
          x2="270"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {[220, 260, 300, 340, 380, 420].map((y) => (
          <g key={y}>
            <line
              x1="220"
              y1={y}
              x2="240"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
            <line
              x1="250"
              y1={y}
              x2="270"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
          </g>
        ))}

        <text
          x="245"
          y="335"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 6")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 245 335)"
        >
          CORSIA 6
        </text>

        {isHighlighted("Corsia 6") && (
          <text
            x="245"
            y="160"
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
          x="315"
          y="175"
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

        {/* Scaffali Corsia 7 */}
        <line
          x1="330"
          y1="200"
          x2="330"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="380"
          y1="200"
          x2="380"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {[220, 260, 300, 340, 380, 420].map((y) => (
          <g key={y}>
            <line
              x1="330"
              y1={y}
              x2="350"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
            <line
              x1="360"
              y1={y}
              x2="380"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
          </g>
        ))}

        <text
          x="355"
          y="335"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 7")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 355 335)"
        >
          CORSIA 7
        </text>

        {isHighlighted("Corsia 7") && (
          <text
            x="355"
            y="160"
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
          x="425"
          y="175"
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

        {/* Scaffali Corsia 8 */}
        <line
          x1="440"
          y1="200"
          x2="440"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="490"
          y1="200"
          x2="490"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {[220, 260, 300, 340, 380, 420].map((y) => (
          <g key={y}>
            <line
              x1="440"
              y1={y}
              x2="460"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
            <line
              x1="470"
              y1={y}
              x2="490"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
          </g>
        ))}

        <text
          x="465"
          y="335"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 8")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 465 335)"
        >
          CORSIA 8
        </text>

        {isHighlighted("Corsia 8") && (
          <text
            x="465"
            y="160"
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
          x="535"
          y="175"
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

        {/* Scaffali Corsia 9 */}
        <line
          x1="550"
          y1="200"
          x2="550"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="600"
          y1="200"
          x2="600"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {[220, 260, 300, 340, 380, 420].map((y) => (
          <g key={y}>
            <line
              x1="550"
              y1={y}
              x2="570"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
            <line
              x1="580"
              y1={y}
              x2="600"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
          </g>
        ))}

        <text
          x="575"
          y="335"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 9")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 575 335)"
        >
          CORSIA 9
        </text>

        {isHighlighted("Corsia 9") && (
          <text
            x="575"
            y="160"
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
          x="635"
          y="175"
          width="80"
          height="270"
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
          x1="650"
          y1="200"
          x2="650"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        <line
          x1="700"
          y1="200"
          x2="700"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="6"
        />

        {[220, 260, 300, 340, 380, 420].map((y) => (
          <g key={y}>
            <line
              x1="650"
              y1={y}
              x2="670"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
            <line
              x1="680"
              y1={y}
              x2="700"
              y2={y}
              stroke="#64748b"
              strokeWidth="3"
            />
          </g>
        ))}

        <text
          x="675"
          y="335"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={
            isHighlighted("Corsia 3")
              ? "#ffffff"
              : "#334155"
          }
          transform="rotate(-90 675 335)"
        >
          CORSIA 3
        </text>

        {isHighlighted("Corsia 3") && (
          <text
            x="675"
            y="160"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#2563eb"
          >
            DESTINAZIONE
          </text>
        )}

        {/* ==================== */}
        {/* CASSE                 */}
        {/* ==================== */}

        <rect
          x="430"
          y="470"
          width="185"
          height="70"
          rx="10"
          fill="#fee2e2"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="522"
          y="488"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#991b1b"
        >
          CASSE
        </text>

        {/* Cassa 1 */}
        <rect
          x="440"
          y="498"
          width="38"
          height="28"
          rx="4"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="459"
          y="517"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#991b1b"
        >
          1
        </text>

        {/* Cassa 2 */}
        <rect
          x="482"
          y="498"
          width="38"
          height="28"
          rx="4"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="501"
          y="517"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#991b1b"
        >
          2
        </text>

        {/* Cassa 3 */}
        <rect
          x="524"
          y="498"
          width="38"
          height="28"
          rx="4"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="543"
          y="517"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#991b1b"
        >
          3
        </text>

        {/* Cassa 4 */}
        <rect
          x="566"
          y="498"
          width="38"
          height="28"
          rx="4"
          fill="#ffffff"
          stroke="#991b1b"
          strokeWidth="2"
        />

        <text
          x="585"
          y="517"
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#991b1b"
        >
          4
        </text>

        {/* ==================== */}
        {/* INGRESSO              */}
        {/* ==================== */}

        <rect
          x="635"
          y="470"
          width="125"
          height="70"
          rx="10"
          fill="#dcfce7"
          stroke="#166534"
          strokeWidth="2"
        />

        <text
          x="697"
          y="505"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#166534"
        >
          INGRESSO
        </text>

        {/* Porte ingresso */}
        <rect
          x="675"
          y="515"
          width="16"
          height="12"
          fill="#ffffff"
          stroke="#166534"
          strokeWidth="2"
        />

        <rect
          x="704"
          y="515"
          width="16"
          height="12"
          fill="#ffffff"
          stroke="#166534"
          strokeWidth="2"
        />

        {/* ==================== */}
        {/* PASSAGGI              */}
        {/* ==================== */}

        <line
          x1="190"
          y1="150"
          x2="190"
          y2="455"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8 6"
        />

        <line
          x1="190"
          y1="455"
          x2="760"
          y2="455"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8 6"
        />

        <text
          x="760"
          y="445"
          textAnchor="end"
          fontSize="11"
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
