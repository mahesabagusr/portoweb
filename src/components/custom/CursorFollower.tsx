import { useEffect, useRef } from 'react';

export default function CursorFollower(): React.JSX.Element {
  const followerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const delayed = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const follower = followerRef.current;
    const ring = ringRef.current;
    if (!follower || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      follower.style.opacity = '1';

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        target?.tagName === 'A' ||
        target?.tagName === 'BUTTON' ||
        target?.getAttribute('role') === 'button' ||
        target?.closest('a, button, [role="button"]') !== null;

      ring.className = `cursor-ring${isInteractive ? ' cursor-ring-hover' : ''}`;
    };

    const onLeave = () => {
      follower.style.opacity = '0';
    };

    const animate = () => {
      delayed.current.x += (pos.current.x - delayed.current.x) * 0.05;
      delayed.current.y += (pos.current.y - delayed.current.y) * 0.05;
      follower.style.left = `${delayed.current.x}px`;
      follower.style.top = `${delayed.current.y}px`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={followerRef} className="cursor-follower" style={{ opacity: 0 }}>
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
