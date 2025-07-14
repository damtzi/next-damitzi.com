import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-medium">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}
