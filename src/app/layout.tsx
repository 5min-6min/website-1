import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Noto_Sans_JP, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const notoSans = Noto_Sans_JP({
	subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "e6nlaq's Lab",
	description: "たくさんツールを出すよ",
	icons: "/favicon.svg",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning className="hidden-scrollbar">
			<body className={`${notoSans.className} $antialiased `}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Nav />

					<div className="flex justify-center items-center w-screen py-16">
						{children}
					</div>
					<footer>
						<div className="flex justify-center items-center py-4">
							<p className={`${sourceCodePro.className}  text-sm`}>
								(C) 2025 e6nlaq
							</p>
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
