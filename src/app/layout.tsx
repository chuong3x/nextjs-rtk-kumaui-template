import type { Metadata } from "next";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import { Inter } from "next/font/google";

import "./globals.css";

import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <KumaRegistry>{children}</KumaRegistry>
                </StoreProvider>
            </body>
        </html>
    );
}
