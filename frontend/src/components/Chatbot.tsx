import { useEffect, useState } from "react";

/* =========================
   Internal Metric Component
   (NOT exported on purpose)
   ========================= */
const Metric = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number | string;
  unit?: string;
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof value !== "number") return;

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.round(start * 10) / 10);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive(!active)} // mobile support
      style={{
        flex: 1,
        minWidth: "160px",
        padding: "14px 10px",
        borderRadius: "12px",
        backgroundColor: active ? "#2563eb" : "#ffffff",
        textAlign: "center",
        cursor: "pointer",
        border: active ? "1px solid #2563eb" : "1px solid #e5e7eb",
        boxShadow: active
          ? "0 10px 25px rgba(37,99,235,0.35)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: 600,
          color: active ? "#ffffff" : "#111827",
        }}
      >
        {typeof value === "number" ? displayValue : value}
        {unit && (
          <span
            style={{
              fontSize: "12px",
              marginLeft: "4px",
              color: active ? "#dbeafe" : "#374151",
            }}
          >
            {unit}
          </span>
        )}
      </div>

      <div
        style={{
          fontSize: "12px",
          marginTop: "6px",
          letterSpacing: "0.3px",
          color: active ? "#bfdbfe" : "#6b7280",
        }}
      >
        {label}
      </div>
    </div>
  );
};

/* =========================
   Main Exported Component
   ========================= */
const Chatbot = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Car Image */}
      <div
        style={{
          width: "100%",
          minHeight: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/car3.png"
          alt="Vehicle digital twin"
          style={{
            width: "100%",
            maxHeight: "460px",
            objectFit: "contain",
            opacity: 0.95,
              transform: "scale(2.00)",
            clipPath: "inset(10px)", // trims useless transparent padding
          }}
        />
      </div>

      {/* Metrics */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Metric label="Avg Speed" value={68} unit="km/h" />
        <Metric label="Fuel Efficiency" value={14.2} unit="km/l" />
        <Metric label="Coolant Health" value="Stable" />
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "13px",
          color: "#6b7280",
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        Live vehicle metrics visualized through the digital twin, continuously
        monitored by predictive maintenance models for early fault detection.
      </div>
    </div>
  );
};

export default Chatbot; // ✅ ONLY export → Fast Refresh SAFE
