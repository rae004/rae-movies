import Script from 'next/script';

const GA_TRACKING_ID = 'G-GT0P4NCCG6';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="g-analytics-base"
        strategy="afterInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: we must set Google Analytics script using noDangerouslySetInnerHtml
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            `,
        }}
      />
    </>
  );
}
