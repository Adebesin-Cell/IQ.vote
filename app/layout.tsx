import type { Metadata } from "next";
import localFont from "next/font/local";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { ClientProviders } from "@/components/client-providers";
import Navbar from "../components/shared/navbar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "IQ Vote",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ClientProviders>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow min-h-screen">{children}</main>
					</div>
				</ClientProviders>
			</body>
		</html>
	);
}
