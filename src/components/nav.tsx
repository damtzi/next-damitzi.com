import Image from "next/image";
import PureBlue from "../../public/images/0007fb.png";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image
                        src={PureBlue}
                        alt="Pure blue, hex code #0007FB"
                        className="rounded-full hover:scale-110 transition-transform duration-300"
                        width={36}
                        height={36}
                    />
                </Link>
                <div className="flex flex-col">
                    <span>Damian Tziamtzis</span>
                    <span className="text-gray-400">Frontend Engineer</span>
                </div>
            </div>
            <ThemeToggle />
        </nav>
    );
};
