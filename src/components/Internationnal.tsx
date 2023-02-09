import React, { useState, useEffect } from "react";

interface InternationalProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: string[];
}
const International: React.FC<InternationalProps> = ({ logos }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollInterval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollIndex((scrollIndex + 1) % logos.length);
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, [scrollIndex, logos.length, scrollInterval]);

  return (
    <section className="container py-32  mx-auto place-items-center">
      <div style={{ overflowX: "hidden", whiteSpace: "nowrap" }}>
        {logos.map((logo, i) => (
          <img
            alt="{logo}"
            key={i}
            src={logo}
            style={{
              filter: "grayscale(80%)",
              display: "inline-block",
              width: "200px",
              marginRight: "24px",
              opacity: i === scrollIndex ? 1 : 0.2,
              transition: "opacity ease-in-out 500ms",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default International;
