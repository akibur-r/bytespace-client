const CELL_SIZE = 120;
const LINE = "rgb(255 255 255 / 0.1)";

export function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(to right, ${LINE} 0 2px, transparent 1px ${CELL_SIZE}px), repeating-linear-gradient(to bottom, ${LINE} 0 2px, transparent 1px ${CELL_SIZE}px)`,
      }}
    />
  );
}