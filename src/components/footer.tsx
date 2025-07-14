import { Fragment } from "react";

const footerLinks = [
    { href: "https://github.com/damtzi", text: "github" },
    { href: "https://bsky.app/profile/damitzi.bsky.social", text: "bluesky" },
    { href: "https://www.instagram.com/damitzi__", text: "instagram" },
    { href: "mailto:damian.tziamtzis@gmail.com", text: "email" },
];

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-4">
            <div className="bg-linear-to-r from-transparent via-pure-blue to-transparent w-full h-[1px]"></div>
            <div className="flex items-center justify-center">
                {footerLinks.map((link, index) => (
                    <Fragment key={link.href}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer"
                        >
                            {link.text}
                        </a>
                        {index !== footerLinks.length - 1 && (
                            <svg width="6" height="6" className="mx-4">
                                <circle cx="3" cy="3" r="3" fill="#0007fb" />
                            </svg>
                        )}
                    </Fragment>
                ))}
            </div>
        </footer>
    );
};
