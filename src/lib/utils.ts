export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedSecs = secs < 10 ? `0${secs}` : secs;
    return `${mins}:${formattedSecs}`;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function slugify(str: string): string {
    return str
        .toLowerCase()
        .normalize('NFD') // Normalize special characters
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Remove consecutive hyphens
}

export function deslugify(slug: string): string {
    return slug
        .replace(/-/g, ' ')
        .replace(/(^\w|\s\w)/g, (char) => char.toUpperCase());
}
