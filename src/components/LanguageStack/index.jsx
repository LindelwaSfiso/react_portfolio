/* eslint-disable react/jsx-key */
import {
    IconBrandCpp,
    IconBrandPython,
    IconBrandKotlin,
    IconBrandJavascript,
    IconBrandDjango,
    IconBrandBootstrap,
    IconBrandReact,
    IconBrandRedux,
    IconBrandTailwind,
    IconBrandUbuntu,
    IconBrandAndroid,
    IconBrandCss3,
    IconBrandPhp,
    IconBrandFirebase,
    IconBrandDocker,
    IconBrandGit,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandNodejs,
} from "@tabler/icons-react";
import styled from "styled-components";

const languages = [
    <IconBrandCpp/>,
    <IconBrandPython/>,
    <IconBrandKotlin/>,
    <IconBrandJavascript/>,
    <IconBrandDjango/>,
    <IconBrandBootstrap/>,
    <IconBrandReact/>,
    <IconBrandRedux/>,
    <IconBrandTailwind/>,
    <IconBrandUbuntu/>,
    <IconBrandAndroid/>,
    <IconBrandCss3/>,
    <IconBrandPhp/>,
    <IconBrandFirebase/>,
    <IconBrandDocker/>,
    <IconBrandGit/>,
    <IconBrandMysql/>,
    <IconBrandNextjs/>,
    <IconBrandNodejs/>,
];


const StyledLanguageStackIcon = styled.div`
  svg {
    height: 36px;
    width: 36px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;


export default function LanguageStack() {
    return (
        <div className="mt-8 md:mt-16">
            <p className="p-4 pl-0 text-xl sm:text-3xl font-bold capitalize">
                Language Stack
            </p>

            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-3">
                {languages.map((language, index) => {
                    return <div
                        key={index}
                        className="rounded-md bg-slate-600 p-1 justify-center items-center flex sm:hover:bg-blue-600">
                        <StyledLanguageStackIcon>
                            {language}
                        </StyledLanguageStackIcon>
                    </div>;
                })}
            </div>
        </div>
    );
}
