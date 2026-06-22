/**
 * Focus & Values diagrams rebuilt as crisp SVG (the original PNGs had soft,
 * low-contrast text). Three overlapping circles inside a dark-ringed gray
 * disc, with sharp white labels — matching the live site's layout.
 */

const FILL = "#8c8c8c";
const RING = "#1c1c1c";

function VennBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 560 560"
      className="mx-auto w-full max-w-[480px]"
      role="img"
    >
      {/* enclosing disc */}
      <circle cx="280" cy="280" r="274" fill={FILL} stroke={RING} strokeWidth="7" />
      {/* three venn outlines */}
      <g fill="none" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1.4">
        <circle cx="280" cy="205" r="152" />
        <circle cx="203" cy="338" r="152" />
        <circle cx="357" cy="338" r="152" />
      </g>
      {children}
    </svg>
  );
}

const headProps = {
  fill: "#ffffff",
  fontWeight: 700,
  textAnchor: "middle" as const,
  fontFamily: "var(--font-raleway), Raleway, sans-serif",
};
const subProps = {
  fill: "#f1f1f1",
  fontWeight: 500,
  textAnchor: "middle" as const,
  fontFamily: "var(--font-raleway), Raleway, sans-serif",
};

export function FocusVenn() {
  return (
    <VennBase>
      <text {...headProps} x="280" y="150" fontSize="20" letterSpacing="1">
        CHRISTOLOGY
      </text>
      <text {...headProps} x="175" y="372" fontSize="17">
        ECCLESIOLOGY
      </text>
      <text {...headProps} x="388" y="372" fontSize="17">
        MISSIOLOGY
      </text>
      <text {...headProps} x="280" y="298" fontSize="16">
        DISCIPLESHIP
      </text>
    </VennBase>
  );
}

function SubList({
  x,
  y,
  items,
  size = 11,
}: {
  x: number;
  y: number;
  items: string[];
  size?: number;
}) {
  return (
    <text {...subProps} x={x} fontSize={size}>
      {items.map((it, i) => (
        <tspan key={it} x={x} y={y + i * (size + 4)}>
          {it}
        </tspan>
      ))}
    </text>
  );
}

export function ValuesVenn() {
  return (
    <VennBase>
      {/* WORSHIP (top) */}
      <text {...headProps} x="280" y="138" fontSize="19" letterSpacing="0.5">
        WORSHIP
      </text>
      <SubList
        x={280}
        y={158}
        items={["Scripture", "Prayer & Dependence", "Zeal & Contemplation", "Humility & Passion"]}
      />

      {/* COMMUNITY (bottom-left) */}
      <text {...headProps} x="172" y="360" fontSize="17">
        COMMUNITY
      </text>
      <SubList
        x={172}
        y={378}
        items={[
          "One Another",
          "Sharing & Giving",
          "Equipping & Empowerment",
          "Culture & Ethnicity",
          "Simplicity",
        ]}
        size={10}
      />

      {/* MISSION (bottom-right) */}
      <text {...headProps} x="392" y="360" fontSize="17">
        MISSION
      </text>
      <SubList
        x={392}
        y={378}
        items={[
          "The Kingdom",
          "Every Nation & Tribe",
          "Righteousness & Justice",
          "The Lost & Poor in Spirit",
          "Contextualization",
        ]}
        size={10}
      />

      {/* JESUS (center) */}
      <text {...headProps} x="280" y="292" fontSize="17">
        JESUS
      </text>

      {/* MICROCHURCH (bottom, inside outer ring) */}
      <text {...headProps} x="280" y="528" fontSize="14" letterSpacing="1">
        MICROCHURCH
      </text>
    </VennBase>
  );
}
