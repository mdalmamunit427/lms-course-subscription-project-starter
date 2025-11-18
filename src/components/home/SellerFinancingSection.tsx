'use client';

import AnimatedElement from './AnimatedElement';
import ComparisonComponent from './ComparisonComponent';

export default function SellerFinancingSection() {
  return (
    <div className="section-financing">
      <div className="padding-global">
        <div className="container-content">
          <div>
            <div className="margin-bottom-xs">
              <div className="margin-bottom-xs">
                <AnimatedElement
                  className="content-box is-center"
                >
                  <div className="text-block">What is Seller Financing?</div>
                </AnimatedElement>
              </div>
              <AnimatedElement
                as="h2"
                delay={0.1}
              >
                Wall Street&apos;s
                <span className="text-style-underline text-color-primary"> &quot;Pay As You Profit&quot;</span>
                Strategy for Buying Profitable Businesses Using It&apos;s Own
                Future Revenue
              </AnimatedElement>
            </div>
            <div className="margin-bottom-xs">
              <div className="margin-bottom-sm">
                <AnimatedElement
                  as="p"
                  delay={0.2}
                >
                  Seller Financing is where you strategically structure a
                  deal where the business&apos;s cash flow covers the cost of
                  acquisition, allowing you to become an owner with minimal
                  upfront investment. <br /><br />Think of it like this—When
                  you buy a business with seller financing, you&apos;re
                  essentially taking over a business with a built-in payment
                  plan.
                </AnimatedElement>
              </div>
              <div className="margin-bottom-sm">
                <AnimatedElement
                  as="ul"
                  role="list"
                  className="checklist-wrapper gap-md list-unstyled"
                  delay={0.3}
                >
                  <li className="checklist">
                    <div className="bullet-x"></div>
                    <p>No More Applying for Loans</p>
                  </li>
                  <li className="checklist">
                    <div className="bullet-x"></div>
                    <p>No More Impossible Down Payments</p>
                  </li>
                  <li className="checklist">
                    <div className="bullet-x"></div>
                    <p>No More Leveraging Credit</p>
                  </li>
                  <li className="checklist">
                    <div className="bullet-x"></div>
                    <p>No More Risking Personal Capital</p>
                  </li>
                </AnimatedElement>
              </div>
              <div className="margin-bottom-md">
                <AnimatedElement
                  as="p"
                  delay={0.4}
                >
                  Seller Financing is all about partnering with sellers who
                  are ready to exit, transferring ownership to you while
                  they finance the deal. <br /><br />And the best part?
                  <br /><br />You can master this system without needing
                  decades of experience or an MBA.
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
        <ComparisonComponent />
      </div>
    </div>
  );
}

