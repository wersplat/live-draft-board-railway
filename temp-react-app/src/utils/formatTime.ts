/**
 * Formats seconds into MM:SS format
 * @param seconds - Number of seconds
 * @returns Formatted time string (e.g., "01:30")
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
