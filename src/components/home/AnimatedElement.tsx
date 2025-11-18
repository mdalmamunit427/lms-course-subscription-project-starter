'use client';

import { ReactNode, ElementType } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { animationPresets } from '@/utils/animationStyles';

interface AnimatedElementProps {
  children: ReactNode;
  as?: ElementType;
  animation?: 'fadeInUp' | 'fadeInUpLarge' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allow any other HTML attributes
}

export default function AnimatedElement({
  children,
  as: Component = 'div',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.2,
  className,
  style,
  ...props
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animationStyle = animationPresets[animation](isVisible, delay);
  const combinedStyle = { ...animationStyle, ...style };

  return (
    <Component ref={ref} className={className} style={combinedStyle} {...props}>
      {children}
    </Component>
  );
}

