import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import LanguageStack from "./components/LanguageStack";
import ProjectsSection from "./components/ProjectsSection";
import EmailSideContent from "./components/SideContent/EmailSideContent";
import SocialSideContent from "./components/SideContent/SocialSideContent";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "./styles";

function App() {
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

export default App;
