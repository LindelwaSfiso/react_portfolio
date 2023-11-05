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

const languages = [
  <IconBrandCpp />,
  <IconBrandPython />,
  <IconBrandKotlin />,
  <IconBrandJavascript />,
  <IconBrandDjango />,
  <IconBrandBootstrap />,
  <IconBrandReact />,
  <IconBrandRedux />,
  <IconBrandTailwind />,
  <IconBrandUbuntu />,
  <IconBrandAndroid />,
  <IconBrandCss3 />,
  <IconBrandPhp />,
  <IconBrandFirebase />,
  <IconBrandDocker />,
  <IconBrandGit />,
  <IconBrandMysql />,
  <IconBrandNextjs />,
  <IconBrandNodejs />,
];

export default function LaguageStack() {
  return (
    <div className="mt-4">
      <p className="p-4 pl-0 text-xl sm:text-3xl font-bold capitalize">
        Language Stack
      </p>
 
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-3">
        {languages.map((language, index) => {
          return <div key={index} className="rounded-md bg-slate-600 p-1 justify-center items-center flex">{language}</div>;
        })}
      </div>
    </div>
  );
}
