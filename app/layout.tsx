import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const sfMono = localFont({
	src: [
		{ path: '../public/fonts/SFMono-Light.otf', weight: '300' },
		{ path: '../public/fonts/SFMono-Regular.otf', weight: '400' },
		{ path: '../public/fonts/SFMono-Medium.otf', weight: '500' },
		{ path: '../public/fonts/SFMono-Semibold.otf', weight: '600' },
		{ path: '../public/fonts/SFMono-Bold.otf', weight: '700' },
		{ path: '../public/fonts/SFMono-Heavy.otf', weight: '800' },
	],
	variable: '--font-sf-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	title: "Shaurya Kumar - My Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sfMono.variable} antialiased font-sans`}
			>
				{children}
			</body>
		</html>
	);
}
