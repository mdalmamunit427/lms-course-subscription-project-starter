import { CSSProperties } from 'react';

interface AnimationStyleOptions {
  isVisible: boolean;
  translateY?: number;
  translateX?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  easing?: string;
}

export function getScrollAnimationStyle({
  isVisible,
  translateY = 60,
  translateX = 0,
  scale = 0.95,
  duration = 1,
  delay = 0,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)'
}: AnimationStyleOptions): CSSProperties {
  return {
    transform: isVisible
      ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      : `translate3d(${translateX}px, ${translateY}px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    opacity: isVisible ? 1 : 0,
    transformStyle: 'preserve-3d' as const,
    transition: `transform ${duration}s ${easing}, opacity ${duration}s ease`,
    ...(delay > 0 && { transitionDelay: `${delay}s` })
  };
}

// Preset animation styles for common use cases
export const animationPresets = {
  fadeInUp: (isVisible: boolean, delay = 0) => 
    getScrollAnimationStyle({ isVisible, translateY: 60, scale: 0.95, duration: 1, delay }),
  
  fadeInUpLarge: (isVisible: boolean, delay = 0) => 
    getScrollAnimationStyle({ isVisible, translateY: 100, scale: 0.9, duration: 1.3, delay }),
  
  fadeInLeft: (isVisible: boolean, delay = 0) => 
    getScrollAnimationStyle({ isVisible, translateX: -30, translateY: 0, scale: 1, duration: 0.8, delay }),
  
  fadeInRight: (isVisible: boolean, delay = 0) => 
    getScrollAnimationStyle({ isVisible, translateX: 30, translateY: 0, scale: 1, duration: 0.8, delay }),
  
  fadeIn: (isVisible: boolean, delay = 0) => 
    getScrollAnimationStyle({ isVisible, translateY: 0, scale: 1, duration: 0.8, delay })
};

