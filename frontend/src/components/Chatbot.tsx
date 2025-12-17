const Chatbot = () => {
  return (
    <div
      style={{
        padding: "0",
        borderRadius: "8px",
        width: "100%",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Car Image */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
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

      {/* Bottom Text */}
      <div
        style={{
          marginTop: "8px",
          fontSize: "14px",
          color: "#22c55e",
          textAlign: "center",
        }}
      >
        Recommendation: Proactive coolant inspection within next service cycle.
      </div>
    </div>
  );
};

export default Chatbot;
