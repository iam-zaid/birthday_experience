export function BirthdayConfetti() {
  return (
    <div className="birthdayConfetti" aria-hidden="true">
      {Array.from({ length: 54 }, (_, index) => (
        <span
          key={index}
          style={
            {
              left: `${(index * 43) % 100}%`,
              "--confetti-delay": `${(index % 18) * -0.42}s`,
              "--confetti-duration": `${7 + (index % 6)}s`,
              "--confetti-drift": `${((index % 9) - 4) * 22}px`,
              "--confetti-rotation": `${(index * 71) % 360}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
