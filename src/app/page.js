"use client";

import {theme, GlobalStyle} from "@/styles";
import {ThemeProvider} from "styled-components";
import Header from "@/components/HeaderSection";
import EmailSideContent from "@/components/SideContent/EmailSideContent";
import SocialSideContent from "@/components/SideContent/SocialSideContent";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LanguageStack from "@/components/LanguageStack";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>

            <Header/>
            <main className="px-7 sm:px-28">

                <EmailSideContent/>
                <SocialSideContent/>

                <HeroSection/>

                <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

                <AboutSection/>

                <SkillsSection/>

                <LanguageStack/>

                <ProjectsSection/>

                <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-100 mt-8"/>

                <FooterSection/>

            </main>
        </ThemeProvider>
    );
}
