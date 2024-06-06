import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

const Logo = '/logo.svg';

export default function Index() {
    return (
        <nav className="sticky top-0 z-[99999] shadow-lg px-8 backdrop-blur-md">
            <div className="h-16 flex justify-between items-center py-1">
                {/** logo */}
                <img src={Logo} alt="dlamini lindelwa" className="h-10 sm:h-16"/>

                <div>
                    <a
                        href="https://github.com/LindelwaSfiso"
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        className="mr-3 inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
                    >
                        <IconBrandGithub className="text-white"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lindelwa-sifiso-dlamini-63177b139/"
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
                    >
                        <IconBrandLinkedin className="text-white"/>
                    </a>
                </div>

            </div>

        </nav>
    );
}
