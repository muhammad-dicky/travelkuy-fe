"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Test } from './components/index/Navbar'


// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <html lang="en">
          <body >
            {children}</body>
        </html></QueryClientProvider>
    </>
  )
}
