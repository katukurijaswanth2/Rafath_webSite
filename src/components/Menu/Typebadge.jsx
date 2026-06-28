import "./TypeBadge.css";

const TYPE_STYLES = {
  Veg:       { dot: "#22c55e", border: "#22c55e" },
  "Non-Veg": { dot: "#ef4444", border: "#ef4444" },
  Egg:       { dot: "#f59e0b", border: "#f59e0b" },
  Seafood:   { dot: "#3b82f6", border: "#3b82f6" },
  Sweet:     { dot: "#a855f7", border: "#a855f7" },
  Snack:     { dot: "#f97316", border: "#f97316" },
};

export default function TypeBadge({ type }) {
  const s = TYPE_STYLES[type] || { dot: "#9ca3af", border: "#9ca3af" };

  return (
    <span
      className="type-badge"
      style={{ color: s.border, border: `1.5px solid ${s.border}` }}
    >
      <span
        className="type-badge__dot"
        style={{ background: s.dot }}
      />
      {type}
    </span>
  );
}