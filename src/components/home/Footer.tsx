import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="padding-global">
        <div className="container-xlarge">
          <div className="padding-vertical padding-xxlarge">
            <div className="footer-letter-wrapper">
              <a
                href="/"
                aria-current="page"
                className="footer-logo inline-block current"
              >
                <Image
                  src="/images/footer-logo.svg"
                  alt="Contrarian Thinking logo"
                  width={200}
                  height={50}
                  priority={false}
                />
              </a>
            </div>
            <div className="padding-vertical padding-xxlarge">

            </div>

            <div className="padding-top padding-medium">
              <div className="footer-bottom-wrapper">
                <div
                  className="footer-credit-text"
                >
                  © 2024 Contrarian Thinking LLC, All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

