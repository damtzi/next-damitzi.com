import { unstable_ViewTransition as ViewTransition } from "react";
import Vinyls from "../../../../public/vinyls/collection.json";
import VinylPng from '../../../../public/images/black-vinyl.png';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from "@/lib/utils";

export default function VinylsPage() {
    return (
        <div className="flex flex-col gap-8">
            <ViewTransition name="vinyls-page-header">
                <h2 className="text-2xl font-serif font-medium">Vinyl collection</h2>
            </ViewTransition>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                {Vinyls.map((vinyl) => (
                    <Link href={`/music/vinyls/${slugify(vinyl.title)}`} className="relative group" key={vinyl.title}>
                        <ViewTransition name={`vinyl-${slugify(vinyl.title)}`}>
                            <Image
                                src={vinyl.coverImage}
                                alt={vinyl.title}
                                width={200}
                                height={200}
                                className="hover:scale-105 hover:shadow transition-all duration-300 rounded-xs shadow-lg relative z-10 aspect-square"
                            />
                        </ViewTransition>
                        <Image
                            src={VinylPng}
                            alt="Vinyl record"
                            width={200}
                            height={200}
                            className="absolute top-0 group-hover:translate-x-10 transition-transform duration-300 z-0"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
