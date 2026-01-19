import { useEffect, useState } from "react";

export default function CursorFollower(): React.JSX.Element {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        element?.tagName === "A" ||
        element?.tagName === "BUTTON" ||
        element?.getAttribute("role") === "button" ||
        element?.closest("a, button, [role='button']") !== null;

      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    const animate = () => {
      setDelayedPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.05,
        y: prev.y + (position.y - prev.y) * 0.05,
      }));
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, delayedPosition]);

  return (
    <div
      className={`cursor-follower ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: `${delayedPosition.x}px`,
        top: `${delayedPosition.y}px`,
      }}
    >
      <div
        className={`cursor-ring ${isHovering ? "cursor-ring-hover" : ""}`}
      ></div>
    </div>
  );
}
