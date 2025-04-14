import React, { useEffect } from "react";

const WarningBanner: React.FC = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={styles.banner}>
      <div style={styles.text}>⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠</div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  banner: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "250px",
    height: "35px",
    background:
      "repeating-linear-gradient(to right, red 0px, red 60px, white 60px, white 62px)",
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(45deg)",
    transformOrigin: "top right",
    overflow: "hidden",
    zIndex: 1,
    pointerEvents: "none",
  },
  text: {
    whiteSpace: "nowrap",
    animation: "scrollText 4s linear infinite",
  },
};

export default WarningBanner;
