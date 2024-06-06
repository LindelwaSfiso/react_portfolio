import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Dlamini Lindelwa Portfolio",
    description: "Welcome to Dlamini Lindelwa's Portfolio - showcasing a professional journey through innovative web and app development. Discover a blend of technical expertise in Django, Kotlin, and JavaScript with a passion for mental health awareness and community empowerment. Explore projects that merge cutting-edge technology with social impact.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <StyledComponentsRegistry>
            <body className={`${inter.className} bg-slate-800 text-white`}>
            {children}
            </body>
        </StyledComponentsRegistry>
        </html>
    );
}
