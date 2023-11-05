import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";


export default function FooterSection() {
  return (
    <footer className="flex justify-center  sm:justify-between mt-4 py-3 mb-2">
      <div className="flex flex-col items-center sm:items-start">
      <p className="text-xl font-bold py-0 my-0 mb-1">Dlamini Lindelwa Portfolio</p>
      <p className="my-0 py-0">All rights reserved @ 2023</p>
      </div>

      <div className={"hidden sm:block"}>
        <a
          href="https://github.com/LindelwaSfiso"
          target="_blank"
          rel="noreferrer"
          type="button"
          className="mr-3 inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
        >
          <IconBrandGithub className="text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/lindelwa-sifiso-dlamini-63177b139/"
          target="_blank"
          rel="noreferrer"
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
        >
          <IconBrandLinkedin className="text-white" />
        </a>
      </div>
    </footer>
  );
}
