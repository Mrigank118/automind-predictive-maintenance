import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (typeof value !== "number") return;

    let start = 0;
    const duration = 1200; // ms
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
      style={{
        flex: 1,
        padding: "0px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.02)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        {typeof value === "number" ? displayValue : value}
        {unit && (
          <span style={{ fontSize: "12px", marginLeft: "4px" }}>{unit}</span>
        )}
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#d1d5db",
          marginTop: "4px",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const Chatbot = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "460px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Car Image */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <img
          src="/images/car3.png"
          alt="Car model"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.15)",
            opacity: 0.95,
          }}
        />
      </div>

      {/* Metrics */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px",
        }}
      >
        <Metric label="Avg Speed" value={68} unit="km/h" />
        <Metric label="Fuel Efficiency" value={14.2} unit="km/l" />
        <Metric label="Coolant Health" value="Stable" />
      </div>

      {/* Bottom Text */}
      <div
        style={{
          marginTop: "10px",
          fontSize: "13px",
          color: "#d1d5db",
          textAlign: "center",
        }}
      >
        Live vehicle metrics derived from the digital twin and predictive models.
      </div>
    </div>
  );
};

export default Chatbot;
