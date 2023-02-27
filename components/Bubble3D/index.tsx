import { useEffect, useRef } from 'react';
import { Bubble } from './script';

const Bubble3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubble = useRef<Bubble>();

  useEffect(() => {
    if (!containerRef.current) return;
    bubble.current = new Bubble(window);
    containerRef.current.append(bubble.current?.render());
    const removeListener = bubble.current?.addResizeEventListener(window);
    return () => {
      removeListener();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default Bubble3D;
