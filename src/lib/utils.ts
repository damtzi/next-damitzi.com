export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedSecs = secs < 10 ? `0${secs}` : secs;
    return `${mins}:${formattedSecs}`;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
