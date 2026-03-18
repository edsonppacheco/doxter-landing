import { useEffect } from 'react';
import gsap from 'gsap';

export function useMagneticElements() {
  useEffect(() => {
    // Only apply on non-touch devices
    const mm = gsap.matchMedia();

    mm.add("(hover: hover) and (pointer: fine)", () => {
      const magneticItems = document.querySelectorAll('.btn-primary, .btn-outline, .magnetic');
      
      const cleanups = Array.from(magneticItems).map((element) => {
        const el = element as HTMLElement;
        const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = el.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          
          xTo(x * 0.3);
          yTo(y * 0.3);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          el.removeEventListener('mousemove', handleMouseMove);
          el.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

      return () => {
        cleanups.forEach(cleanup => cleanup());
      };
    });

    return () => mm.revert();
  }, []);
}
