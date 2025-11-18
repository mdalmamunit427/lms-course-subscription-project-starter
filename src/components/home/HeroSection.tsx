import Image from 'next/image';
import AnimatedElement from './AnimatedElement';
import WistiaEmbed from './WistiaEmbed';

export default function HeroSection() {
  return (
    <div className="section-hero-banner">
      <div className="padding-global">
        <div className="container-content">
          <div className="logo-wrapper">
            <AnimatedElement
              as="a"
              href="/"
              aria-current="page"
              className="logo inline-block current"
              threshold={0.1}
            >
              <Image
                src="/images/logo.svg"
                alt="Contrarian Thinking logo"
                width={200}
                height={50}
                priority={true}
              />
            </AnimatedElement>
          </div>
          <div className="center-headlines">
            <div className="margin-bottom-xxs">
              <AnimatedElement
                as="h1"
                delay={0.1}
                threshold={0.1}
              >
                Former Wall Street Veteran Reveals the Secret to
                <span className="text-color-primary"> Buying Profitable, Cash Flowing Businesses </span>
                Without Banks, Credit, or Needing Millions.
              </AnimatedElement>
            </div>
            <div className="margin-bottom-xxs">
              <AnimatedElement
                className="text-size-md"
                delay={0.2}
                threshold={0.1}
              >
                Learn How to Buy Your First<em> (Or Next)</em> Business 
                <span className="text-style-underline"> Today</span> in Less Time
                &amp; Less Money Out-Of-Pocket.
              </AnimatedElement>
            </div>
          </div>
          <AnimatedElement
            className="video-holder"
            animation="fadeInUpLarge"
            delay={0.3}
            threshold={0.1}
            suppressHydrationWarning
          >
            <WistiaEmbed />
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}

