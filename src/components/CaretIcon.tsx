type Dir = "up" | "right" | "down" | "left";

const rot: Record<Dir, number> = { up: 0, right: 90, down: 180, left: 270 };

const CaretIcon = ({
  dir = "down",
  className,
}: {
  dir?: Dir;
  className?: string;
}) => {
  return (
    <img
      src="/icons/caret.svg"
      alt=""
      className={className}
      style={{ transform: `rotate(${rot[dir]}deg)` }}
    />
  );
};

export default CaretIcon;
