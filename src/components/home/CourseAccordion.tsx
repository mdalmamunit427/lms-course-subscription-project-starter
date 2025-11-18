import Accordion from './Accordion';

const VideoIcon = () => (
  <div className="video-embed">
    <div className="embed">
      <span className="kb-svg-icon-wrap kb-svg-icon-fas_video kt-svg-icon-list-single">
        <svg
          viewBox="0 0 576 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
        </svg>
      </span>
    </div>
  </div>
);

const DocumentIcon = () => (
  <div className="video-embed">
    <div className="embed">
      <svg
        viewBox="0 0 8 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 0v8h7v-4h-4v-4h-3zm4 0v3h3l-3-3zm-3 2h1v1h-1v-1zm0 2h1v1h-1v-1zm0 2h4v1h-4v-1z"></path>
      </svg>
    </div>
  </div>
);

export default function CourseAccordion() {
  return (
    <div className="grid-layout faq-list">
      <Accordion 
        title="Unit 1: Introduction on Seller Financing"
      >
        <ul role="list" className="list-unstyled">
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Why business buying: Buy vs Build
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Why now: The State of Small Business
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Why us: Who is Codie Sanchez?
            </p>
          </li>
        </ul>
      </Accordion>

      <Accordion 
        title="Unit 2: Redefining Possibilities and Perfect Fit Sellers"
      >
        <ul role="list" className="list-unstyled">
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Why you think you can&apos;t buy a business
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Mechanism: Overview of Seller Financing
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Method: Benefits for the Seller &amp; Buyer
            </p>
          </li>
          <li className="video-list">
            <DocumentIcon />
            <p className="text-size-base">
              Model: The Seller-Financing Avatar
            </p>
          </li>
        </ul>
      </Accordion>

      <Accordion 
        title="Unit 3: Targeting the Ideal Deal: Finding, Convincing, and Structuring"
      >
        <ul role="list" className="list-unstyled">
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Search: 4 Ways to Actually Find Seller-Financed Deals
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Scrutinize: Analyzing the Business
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Speak: Seller Engagement Process
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Sell: Overcome Objections
            </p>
          </li>
        </ul>
      </Accordion>

      <Accordion 
        title="Unit 4: Closing Deals: Live Conversations, Structuring, and Risk Mitigation"
      >
        <ul role="list" className="list-unstyled">
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Show: Role Play w/ Conversations with Sellers
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Structure: Structuring Your Deal
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Sign: Negotiation and Closing Your Deal
            </p>
          </li>
          <li className="video-list">
            <VideoIcon />
            <p className="text-size-base">
              Stumble: 22 Ways to Mess up a deal
            </p>
          </li>
        </ul>
      </Accordion>
    </div>
  );
}
