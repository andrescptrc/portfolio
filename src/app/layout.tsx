import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Manrope, Source_Code_Pro } from 'next/font/google';
import classNames from 'classnames';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={classNames(
          'bg-black-primary bg-stars-group mx-4 overflow-x-hidden',
          manrope.variable,
          source_code_pro.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

type RootLayoutProps = {
  children: ReactNode;
};
