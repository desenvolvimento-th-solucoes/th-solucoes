"use client";

import { AuthenticationProvider } from '@/app/context/AuthenticationContext';
import '../src/app/globals.css';
import type { Metadata } from 'next'
import React, { useEffect, useState } from "react";
import { AppProps } from 'next/app';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { AcceptCookies } from '@/app/components/AcceptCookies';
import { LoadingProvider } from '@/app/context/LoadingContext';

export const metadata: Metadata = {
    title: 'TH Soluções',
    description: 'Consultoria de Tecnologia da Informação',
}

const RootLayout = ({ Component, pageProps }: AppProps) => {
    return (
        <AuthenticationProvider>
            <LoadingProvider>
                <Component {...pageProps} />
            </LoadingProvider>
        </AuthenticationProvider>
    );
}

export default RootLayout;