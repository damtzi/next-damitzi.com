import Image from "next/image";
import PureBlue from "../../public/images/0007fb.png";
import { ThemeToggle } from "./theme-toggle";

export const Nav = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src={PureBlue}
                    alt="Pure blue, hex code #0007FB"
                    className="rounded-full"
                    width={36}
                    height={36}
                />
                <div className="flex flex-col">
                    <span>Damian Tziamtzis</span>
                    <span className="text-gray-400">Frontend Engineer</span>
                </div>
            </div>
            <ThemeToggle />
        </nav>
    );
};
