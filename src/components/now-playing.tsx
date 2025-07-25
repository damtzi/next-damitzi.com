import Song from '../../public/data/now-playing.json';
import Image from 'next/image';
import Link from 'next/link';

export const NowPlaying = () => {
    return (
        <Link href={Song.link} target="_blank" rel="noopener noreferrer" className='flex gap-2'>
            <Image src={Song.coverImage} alt={`Current fav: ${Song.title}`} width={45} height={45} className="aspect-square rounded-md"/>
            <div className='flex flex-col justify-center text-sm'>
                <h2 className='font-semibold'>{Song.title}</h2>
                <p className='text-gray-400'>{Song.artist}</p>
            </div>
        </Link>
    )
}
