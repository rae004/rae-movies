import Script from 'next/script';

export default function GoogleAnalytics() {
  {
    return (
      <>
        <Script
          async
          src={'https://www.googletagmanager.com/gtag/js?id=G-DSDRNG42Y1'}
        />
        <Script
          id="g-analytics-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DSDRNG42Y1');
            `,
          }}
        />
      </>
    );
  }
}
