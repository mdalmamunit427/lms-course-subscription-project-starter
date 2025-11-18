import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

export default function ComparisonComponent() {
  return (
    <div className="container-content">
      <div className="margin-bottom-xxl">
        <AnimatedElement
          className="lined-box text-align-center"
        >
          <h2>
            <em>Seller Financing is the </em>
            <span className="text-style-underline text-color-primary">
              <em>Shortcut to Wealth Creation</em>
            </span>
            <em> That You&apos;ve Been Searching For...</em>
          </h2>
        </AnimatedElement>
      </div>
      <AnimatedElement
        className="comparison-component"
        delay={0.1}
        threshold={0.15}
      >
        <div className="comparison-content">
          <div className="margin-bottom-xs mobile-only">
            <div
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                opacity: 1,
                transformStyle: 'preserve-3d'
              }}
              className="content-box bg-red"
            >
              <div className="button-text-black text-align-center">
                The &quot;Old Way&quot; of Buying Businesses...
              </div>
            </div>
          </div>
          <div className="comparison-note headline-note hide-mobile">
            <div className="comparison-box bigger">
              <div className="note-headline">
                The <span className="text-style-underline">Old</span> Way
              </div>
              <div className="text-size-lg">
                Traditional Business Buying
              </div>
            </div>
            <div className="note-content">
              <div className="text-note">How Everyone Else Does It</div>
              <div className="arrow-note is-1">
                <Image
                  src="/images/arrow-how-does.svg"
                  alt="Contrarian Thinking  arrow 4"
                  width={100}
                  height={60}
                />
              </div>
            </div>
          </div>
          <div className="comparison-arrow">
            <div className="comparison-note">
              <div className="comparison-box">
                <div className="text-size-base text-weight-semibold">
                  Find a Business For Sale That is Within Your Budget
                </div>
              </div>
            </div>
            <div className="comparison-note">
              <div className="comparison-box">
                <div className="text-size-base text-weight-semibold">
                  Negotiate with the Broker Representing the Business
                  Listing
                </div>
              </div>
            </div>
            <div className="comparison-note">
              <div className="comparison-box">
                <div className="text-size-base text-weight-semibold">
                  Apply for Financing
                </div>
              </div>
            </div>
            <div className="comparison-note">
              <div className="comparison-box">
                <div className="text-size-base text-weight-semibold">
                  Put Up 10%-20% of Your Own Money to Secure the Loan
                </div>
              </div>
              <div className="note-content is-3">
                <div className="text-note">
                  Easily Be $100K+ Out-Of-Pocket
                </div>
                <div className="arrow-note is-3">
                  <Image
                    src="/images/arrow-easily.svg"
                    alt="Contrarian Thinking  arrow 5"
                    width={100}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className="comparison-note">
              <div className="comparison-box">
                <div className="text-size-base text-weight-semibold">
                  Finally... Close On the Business
                </div>
              </div>
            </div>
            <div className="arrow-downward">
              <Image
                src="/images/arrow-1.svg"
                alt="Contrarian Thinking  arrow down 2"
                className="arrow--icon"
                width={50}
                height={80}
              />
            </div>
          </div>
          <div className="comparison-note">
            <div className="comparison-box">
              <div className="text-size-base text-weight-semibold">
                Spend Years Paying Back Your Investment Before Taking
                Profits
              </div>
            </div>
            <div className="note-content is-4">
              <div className="arrow-note is-3">
                <Image
                  src="/images/arrow-scale-slower.svg"
                  alt="Contrarian Thinking  arrow 2"
                  width={100}
                  height={60}
                />
              </div>
              <div className="text-note">Acquire Slower</div>
            </div>
          </div>
        </div>
        <div className="comparison-content">
          <div className="margin-bottom-xs mobile-only">
            <div
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                opacity: 1,
                transformStyle: 'preserve-3d'
              }}
              className="content-box bg-blue"
            >
              <div className="button-text-black text-align-center">
                The &quot;New Way&quot;<br />(aka Seller&nbsp;FInancing)
              </div>
            </div>
          </div>
          <div className="comparison-note headline-note hide-mobile">
            <div className="comparison-box is-primary-bg">
              <div className="note-headline">
                The <span className="text-style-underline">New</span> Way
              </div>
              <div className="text-size-lg">Seller Financing</div>
            </div>
            <div className="note-content is-2">
              <div className="text-note">The Smarter Path</div>
              <div className="arrow-note is-1">
                <Image
                  src="/images/arrow-smarter-path.svg"
                  alt="Contrarian Thinking  arrow 1"
                  width={100}
                  height={60}
                />
              </div>
            </div>
          </div>
          <div className="comparison-arrow">
            <div className="comparison-note">
              <div className="comparison-box is-primary-bg">
                <div className="text-size-base text-weight-semibold">
                  Find a Business You Want to Buy 
                </div>
                <div className="text-size-base">
                  (Regardless of Your Budget)
                </div>
              </div>
            </div>
            <div className="comparison-note">
              <div className="comparison-box is-primary-bg">
                <div className="text-size-base text-weight-semibold">
                  Negotiate Directly with the Seller
                </div>
              </div>
            </div>
            <div className="empty-note"></div>
            <div className="empty-note"></div>
            <div className="empty-note"></div>
            <div className="arrow-downward">
              <Image
                src="/images/arrow-2.svg"
                alt="Contrarian Thinking  arrow down 1"
                className="arrow--icon"
                width={50}
                height={80}
              />
            </div>
          </div>
          <div className="comparison-note">
            <div className="comparison-box is-primary-bg">
              <div className="text-size-base text-weight-semibold">
                Close on the Business &amp; Start Taking Profits From
                Day One
              </div>
            </div>
            <div className="note-content is-5">
              <div className="text-note">Acquire Faster!</div>
              <div className="arrow-note is-5">
                <Image
                  src="/images/arrow-scale-faster.svg"
                  alt="Contrarian Thinking  arrow 3"
                  width={100}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}

