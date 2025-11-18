'use client';

import Script from 'next/script';

export default function WistiaEmbed() {
  return (
    <>
      <Script
        src="https://fast.wistia.com/embed/medias/52bco3bb6x.jsonp"
        strategy="afterInteractive"
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="afterInteractive"
      />
      <div className="embed w-script">
        <div
          className="wistia_responsive_padding"
          style={{ padding: '56.25% 0 0 0', position: 'relative' }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%'
            }}
          >
            <div
              className="wistia_embed wistia_async_52bco3bb6x seo=true videoFoam=true"
              style={{ height: '100%', position: 'relative', width: '100%' }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

