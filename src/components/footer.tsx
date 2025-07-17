import { LocalTime } from "./local-time";

export const Footer = () => {
    return (
        <footer className="border-t border-pure-blue">
            {/* <div className="bg-linear-to-r from-transparent via-pure-blue to-transparent w-full h-[1px]"></div> */}
            <div className="pt-2 flex gap-2 items-center justify-end font-mono">
                Gdynia
                <svg width="6" height="6" className="animate-pulse">
                    <circle cx="3" cy="3" r="3" fill="#0007fb" />
                </svg>
                <LocalTime />
            </div>
        </footer>
    );
};
