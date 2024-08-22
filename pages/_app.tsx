"use client";

import { AuthenticationProvider } from '@/app/context/AuthenticationContext';
import '../src/app/globals.css';
import type { Metadata } from 'next'
import React, { useEffect, useState } from "react";
import { AppProps } from 'next/app';
import LoadingScreen from '@/app/components/LoadingScreen';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { AcceptCookies } from '@/app/components/AcceptCookies';

export const metadata: Metadata = {
    title: 'TH Soluções',
    description: 'Consultoria de Tecnologia da Informação',
}

const RootLayout = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState(false);
    const [hiddenAllowCookies, setHiddenAllowCookies] = useState(true);

    const handleDeny = () => setHiddenAllowCookies(true);

    const handleAllow = () => {
        setHiddenAllowCookies(true);
        localStorage.setItem("allowCookies", JSON.stringify({ allowCookies: true }));
    }

    const navigate = useRouter();

    const handleStart = () => {
        setLoading(true);
    };

    const handleComplete = () => {
        setLoading(false);
    };

    useEffect(() => {
        navigate.events.on('routeChangeStart', handleStart);
        navigate.events.on('routeChangeComplete', handleComplete);
        navigate.events.on('routeChangeError', handleComplete);

        return () => {
            navigate.events.off('routeChangeStart', handleStart);
            navigate.events.off('routeChangeComplete', handleComplete);
            navigate.events.off('routeChangeError', handleComplete);
        };
    }, [navigate.events]);

    useEffect(() => {
        if (loading) {
            document.body.style.overflowY = "hidden";
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";
        }
    }, [loading]);

    useEffect(() => {
        if (!localStorage.getItem("allowCookies")) {
            setTimeout(() => setHiddenAllowCookies(false), 3000);
        }
    }, []);

    return (
        <AuthenticationProvider>
            <Component {...pageProps} />
            {loading && <LoadingScreen />}
            <AcceptCookies handleAllow={handleAllow} handleDeny={handleDeny} hidden={hiddenAllowCookies} />
        </AuthenticationProvider>
    );
}

export default RootLayout;