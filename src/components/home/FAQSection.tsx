import AnimatedElement from './AnimatedElement';
import Accordion from './Accordion';

export default function FAQSection() {
  return (
    <div className="section-faq">
      <div className="padding-global">
        <AnimatedElement
          className="container-content"
          threshold={0.15}
        >
          <div className="margin-bottom-xs">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="grid-layout faq-list">
            <Accordion 
              title="What will I learn in this course?"
            >
              <p className="text-size-base">
                Strategies for buying businesses without going into
                debt: how to structure deals, negotiate terms, and
                secure favorable financing from the seller.
              </p>
            </Accordion>
            <Accordion 
              title="Can I cancel and get a refund if I'm not satisfied?"
            >
              <p className="text-size-base">
                Yes, if you&apos;re not happy with the course, there&apos;s a 7
                days 100% money back guarantee,
              </p>
            </Accordion>
            
            <Accordion 
              title="Who is this course for?"
            >
              <p className="text-size-base">
                Anyone really. Teachers. Techies. Public servants.
                Anyone eager to buy cashflowing businesses with
                favorable terms. No previous experience necessary.
              </p>
            </Accordion>
            
            <Accordion 
              title="What is seller financing, and how does it work in the context of buying a business?"
            >
              <p className="text-size-base">
                Seller financing is a method of purchasing a business where the seller provides a loan to the buyer to cover a portion of the purchase price. The buyer makes regular payments to the seller, typically with interest, over an agreed-upon period.
              </p>
            </Accordion>
            
            <Accordion 
              title="What are the benefits of using seller financing to purchase a business?"
            >
              <ul role="list" className="list-unstyled">
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Easier to qualify than traditional loans.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Greater repayment flexibility.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">Have more confidence in your acquisitions.</p>
                </li>
                <li className="video-list">
                  <div className="small-red-dot"></div>
                  <p className="text-size-base">May get approval where traditional financing falls short.</p>
                </li>
              </ul>
            </Accordion>
            
            <Accordion 
              title="How common is seller financing in business acquisitions?"
            >
              <p className="text-size-base">
                Quite common, especially for small and mid-sized businesses. It opens doors for buyers who might not have traditional financing options.
              </p>
            </Accordion>
            
            <Accordion 
              title="How does seller financing differ from traditional bank loans or financing options?"
            >
              <p className="text-size-base">
                Seller financing differs from traditional bank loans in that it involves a direct financial arrangement between the buyer and seller, often bypassing the need for a third-party lender. This can offer more flexibility in terms and may be more accessible to buyers with limited credit or financial history.
              </p>
            </Accordion>
            
            <Accordion 
              title="Will this course work for someone new to investing?"
            >
              <p className="text-size-base">
                No experience? No worries! This course has everything you need to become a master of seller-financing. We&apos;ll transform your approach to wealth, aiming for long-term prosperity.
              </p>
            </Accordion>
            
            <Accordion 
              title="Can the course content be applied outside of the USA?"
            >
              <p className="text-size-base">
                Absolutely, if you&apos;re in a free market economy, you&apos;re good to go. While we can&apos;t cover every country&apos;s laws, this course gives you the knowledge and tools to take advantage of seller financing wherever you are.
              </p>
            </Accordion>
            
            <Accordion 
              title="How much time will it take to complete the course?"
            >
              <p className="text-size-base">
                Complete at your pace: With 4.5 hours of on-demand video and extra content, you can finish it in a day or a month. It&apos;s your call.
              </p>
            </Accordion>
            
            <Accordion 
              title="Who is Codie and why is she the best person to teach this?"
            >
              <p className="text-size-base">
                Codie Sanchez is a renowned expert in seller financing, with a track record of over 26 successful business acquisitions using this innovative strategy. As CEO of Contrarian Thinking Capital, she has mastered the art of structuring deals using seller financing, making her uniquely qualified to teach this course. Codie&apos;s expertise in seller financing, combined with her dynamic teaching style and commitment to empowering entrepreneurs, sets her apart as the ultimate instructor for this course.
              </p>
            </Accordion>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}

