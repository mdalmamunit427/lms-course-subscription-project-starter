import Image from 'next/image';
import AnimatedElement from './AnimatedElement';
import CTAButton from './CTAButton';

export default function IntroSection() {
  return (
    <div className="section-introduce">
      <div className="padding-global">
        <div className="container-content">
          <div className="center-headlines">
            <div className="margin-bottom-sm">
              <div className="margin-bottom-xs">
                <AnimatedElement
                  className="content-box wide"
                >
                  <div className="heading-lg line-1">
                    <span className="font-hand-of-sean">Introducing...</span>
                    <br />The Seller Financing Navigator
                  </div>
                </AnimatedElement>
              </div>
              <AnimatedElement
                as="h2"
                delay={0.1}
              >
                Your All-Access Pass to
                <span className="text-style-underline"> Wall Street&apos;s Unfair Advantage </span>
                for Finding, Negotiating and Acquiring Cash-Flowing
                Businesses <em>Using</em> Seller Financing
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="container-large">
          <AnimatedElement
            className="margin-bottom-lg"
            delay={0.2}
          >
            <Image
              src="/images/self-liquidation-1695.webp"
              alt="Self Liquidation Image"
              width={1695}
              height={954}
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 93vw"
              className="full-width-image"
              priority={false}
            />
          </AnimatedElement>
          <div>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
}

