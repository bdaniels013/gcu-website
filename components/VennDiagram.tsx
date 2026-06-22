/**
 * Focus & Values diagrams rebuilt as crisp SVG (the original PNGs had soft,
 * low-contrast text). Three overlapping circles inside a dark-ringed gray
 * disc, with sharp white labels — matching the live site's layout.
 */

const FILL = "#5e5e5e"; /* darker gray so white labels clearly pop */
const RING = "#161616";

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
      <g fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.6">
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
  fontWeight: 800,
  textAnchor: "middle" as const,
  fontFamily: "var(--font-raleway), Raleway, sans-serif",
  stroke: "#1c1c1c",
  strokeWidth: 2.4,
  strokeLinejoin: "round" as const,
  paintOrder: "stroke" as const,
};
const subProps = {
  fill: "#ffffff",
  fontWeight: 600,
  textAnchor: "middle" as const,
  fontFamily: "var(--font-raleway), Raleway, sans-serif",
  stroke: "#1c1c1c",
  strokeWidth: 1.3,
  strokeLinejoin: "round" as const,
  paintOrder: "stroke" as const,
};

export function FocusVenn() {
  return (
    <VennBase>
      <text {...headProps} x="280" y="152" fontSize="23" letterSpacing="1">
        CHRISTOLOGY
      </text>
      <text {...headProps} x="173" y="374" fontSize="19">
        ECCLESIOLOGY
      </text>
      <text {...headProps} x="390" y="374" fontSize="19">
        MISSIOLOGY
      </text>
      <text {...headProps} x="280" y="300" fontSize="18">
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
      <text {...headProps} x="280" y="140" fontSize="21" letterSpacing="0.5">
        WORSHIP
      </text>
      <SubList
        x={280}
        y={161}
        size={12}
        items={["Scripture", "Prayer & Dependence", "Zeal & Contemplation", "Humility & Passion"]}
      />

      {/* COMMUNITY (bottom-left) */}
      <text {...headProps} x="172" y="358" fontSize="19">
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
        size={11.5}
      />

      {/* MISSION (bottom-right) */}
      <text {...headProps} x="392" y="358" fontSize="19">
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
        size={11.5}
      />

      {/* JESUS (center) */}
      <text {...headProps} x="280" y="294" fontSize="19">
        JESUS
      </text>

      {/* MICROCHURCH (bottom, inside outer ring) */}
      <text {...headProps} x="280" y="528" fontSize="16" letterSpacing="1">
        MICROCHURCH
      </text>
    </VennBase>
  );
}
