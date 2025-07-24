import Concerts from '../../../../public/data/concerts.json';
import type { Concert } from '@/lib/types';
import { Arrow } from '@/components/arrow';
import { dateFormatter } from '@/lib/utils';
import { unstable_ViewTransition as ViewTransition } from "react";

export default function ConcertsPage() {
    return (
        <div className="flex flex-col gap-4">
            <ViewTransition name="concerts-page-header">
                <h2 className="text-2xl font-serif font-medium">Concert tracker</h2>
            </ViewTransition>
            <ul className="space-y-2">
                {Concerts.map((concert: Concert) => (
                    <li key={concert.id} className="flex items-center group gap-2">
                        <Arrow />
                        {concert.artist}, {dateFormatter(concert.date)} @ {concert.location} {concert.festival && `[${concert.festival} Festival]`}
                    </li>
                ))}
            </ul>
        </div>
    );
}
