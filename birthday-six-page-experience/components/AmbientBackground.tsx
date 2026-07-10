export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="sunsetOrb" />
      <div className="lightColumn" />
      <svg className="botanical botanicalLeft" viewBox="0 0 220 300" fill="none">
        <path d="M27 285C55 230 73 164 70 42" stroke="currentColor" strokeWidth="1.2" />
        <path d="M68 104C107 86 127 51 122 16C86 30 66 63 68 104Z" stroke="currentColor" />
        <path d="M70 157C111 147 141 117 146 81C105 89 76 119 70 157Z" stroke="currentColor" />
        <path d="M57 211C25 192 12 160 20 130C51 144 67 177 57 211Z" stroke="currentColor" />
        <path d="M43 250C81 247 111 225 124 195C86 193 55 216 43 250Z" stroke="currentColor" />
      </svg>
      <svg className="botanical botanicalRight" viewBox="0 0 220 300" fill="none">
        <path d="M27 285C55 230 73 164 70 42" stroke="currentColor" strokeWidth="1.2" />
        <path d="M68 104C107 86 127 51 122 16C86 30 66 63 68 104Z" stroke="currentColor" />
        <path d="M70 157C111 147 141 117 146 81C105 89 76 119 70 157Z" stroke="currentColor" />
        <path d="M57 211C25 192 12 160 20 130C51 144 67 177 57 211Z" stroke="currentColor" />
      </svg>
      <div className="horizon" />
      {[
        [12, 22, 3.5, -1],
        [22, 65, 4.2, -2],
        [72, 13, 3, -0.5],
        [88, 62, 5, -3],
        [62, 78, 3.8, -1.8],
        [46, 29, 4.6, -2.4],
      ].map(([left, top, duration, delay], index) => (
        <span
          className="ambientSpark"
          key={index}
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              "--spark-duration": `${duration}s`,
              "--spark-delay": `${delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
