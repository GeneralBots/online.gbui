export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generateId(): string {
  return Math.random().toString(36).slice(2);
}
