import { useEffect, useState } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function useBreakpoint() {
  const [width, setWidth] = useState<number>(0);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

  function updateWidthAndBreakpoint() {
    const { clientWidth } = document.body;
    if (width === clientWidth) return;
    setWidth(clientWidth);
    setBreakpoint(getBreakpoint(clientWidth));
  }

  function isBreakpoint(types: Breakpoint | Breakpoint[]) {
    if (!breakpoint) return false;
    if (Array.isArray(types)) {
      return types.includes(breakpoint);
    } else {
      return breakpoint === types;
    }
  }

  useEffect(() => {
    updateWidthAndBreakpoint();
    window.addEventListener('resize', updateWidthAndBreakpoint);
    return () => {
      window.removeEventListener('resize', updateWidthAndBreakpoint);
    };
  }, []);

  return {
    width,
    breakpoint,
    isBreakpoint,
  };
}

export function getBreakpoint(width: number): Breakpoint {
  if (width <= 640) return 'mobile';
  if (width > 640 && width <= 1280) return 'tablet';
  return 'desktop';
}
