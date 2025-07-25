import { LocalTime } from "@/components/local-time";
import { NowPlaying } from "@/components/now-playing";

export const Footer = () => {
    return (
        <footer className="pt-2 flex items-center justify-between border-t border-pure-blue">
            <NowPlaying />
            <div className="flex gap-2 items-center font-mono">
                Gdynia
                <svg width="6" height="6" className="animate-pulse">
                    <circle cx="3" cy="3" r="3" fill="#0007fb" />
                </svg>
                <LocalTime />
            </div>
        </footer>
    );
};
