import React from 'react';
import Head from 'next/head';

import {
  AppDownload,
  ClientsList,
  Features,
  Footer,
  GrowthCards,
  Header,
  HeroBanner
} from '@/components';
import {
  useAos
} from '@/hooks';

const index = () => {
  useAos({
    offset: 200
  });

  return (
    <>
      <Head>
        <title>Acme Notes - Organize Your Thoughts Effortlessly</title>
        <meta name="description" content="Discover the ultimate notes app that helps you organize your thoughts effortlessly. Take notes, set reminders, and stay organized on any device." />
        <meta name="keywords" content="notes app, note-taking, productivity app, organization, reminders, task management" />
        <meta name="author" content="Acme Corporation" />
        {/* Google tag (gtag.js)  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EH176242C9"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EH176242C9');
            `,
          }}
        />
      </Head>
      <Header />
      <HeroBanner />
      <GrowthCards />
      <Features />
      <ClientsList />
      <AppDownload />
      <Footer />
    </>
  );
};

export default index;
