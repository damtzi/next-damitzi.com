import Concerts from '../../../../public/data/concerts.json';
import type { Concert } from '@/lib/types';
import { Arrow } from '@/components/arrow';
import { dateFormatter } from '@/lib/utils';

export default function ConcertsPage() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-serif font-medium">Concerts</h2>
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
