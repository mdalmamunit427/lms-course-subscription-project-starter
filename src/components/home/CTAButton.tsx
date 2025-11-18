'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AnimatedElement from './AnimatedElement';


// All-Access Subscription Price
const SUBSCRIPTION_PRICE = 99;

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  return (
    <AnimatedElement
      className="container-narrow"
    >
      <div className="margin-bottom-sm">
        <div className="button-group">
          <button
            disabled={loading}
            className="button-primary inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              transition: 'all 400ms ease',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'wait' : 'pointer'
            }}
          >
            <div>
              <div className="button-text-black">
                {loading ? 'Processing...' : `Get All-Access For Only $${SUBSCRIPTION_PRICE}`}
              </div>
              <div className="button-text">
                {loading ? 'Redirecting to secure checkout...' : 'Unlimited Access to ALL Courses • One-Time Payment'}
              </div>
            </div>
            <div
              className="button-arrow"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 400ms ease',
                transform: isHovered 
                  ? 'translateX(8px) translateY(0px) translateZ(0px)' 
                  : 'translateX(0px) translateY(0px) translateZ(0px)'
              }}
            >
              <Image
                src="/images/button-arrow.svg"
                alt="Button Arrow"
                width={24}
                height={24}
              />
            </div>
          </button>
        </div>
      </div>
      <div className="trusted-group">
        <div className="trusted-icon">
          <Image
            src="/images/trusted.png"
            alt="Trusted partners"
            width={120}
            height={40}
          />
        </div>
        <div>Trusted by 600K+ Contrarians</div>
      </div>
    </AnimatedElement>
  );
}

