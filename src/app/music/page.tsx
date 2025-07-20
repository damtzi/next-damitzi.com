import { unstable_ViewTransition as ViewTransition } from "react";
import {Arrow} from '@/components/arrow';
import Link from "next/link";

export default function MusicPage() {
    return (
        <div className="flex flex-col gap-4">
            <ViewTransition name="page-header">
                <h2 className="text-2xl font-serif font-medium">Music</h2>
            </ViewTransition>
            <ul className="space-y-2">
                <li className="flex items-center group gap-2">
                    <Arrow />
                    <Link href="/music/vinyls" className="transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer">
                        My record collection
                    </Link>
                </li>
                <li className="flex items-center group gap-2">
                    <Arrow />
                    <Link href="/music/concerts" className="transition-colors duration-150 ease-out hover:text-pure-blue hover:cursor-pointer">
                        Concert tracker
                    </Link>
                </li>
            </ul>
        </div>
    );
}
