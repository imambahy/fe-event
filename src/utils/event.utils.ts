import { EventWithDetails } from "@/types/event.type";

/**
 * Check if an event has expired (end date has passed)
 */
export function isEventExpired(event: EventWithDetails): boolean {
  const now = new Date();
  const endDate = new Date(event.endDate);
  return endDate < now;
}

/**
 * Check if an event has started (start date has passed)
 */
export function isEventStarted(event: EventWithDetails): boolean {
  const now = new Date();
  const startDate = new Date(event.startDate);
  return startDate < now;
}

/**
 * Check if an event is currently ongoing
 */
export function isEventOngoing(event: EventWithDetails): boolean {
  const now = new Date();
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  return startDate <= now && now <= endDate;
}

/**
 * Get event status based on current time
 */
export function getEventStatus(event: EventWithDetails): 'upcoming' | 'ongoing' | 'ended' {
  if (isEventExpired(event)) {
    return 'ended';
  } else if (isEventStarted(event)) {
    return 'ongoing';
  } else {
    return 'upcoming';
  }
}

/**
 * Format date for display
 */
export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Get time remaining until event starts
 */
export function getTimeUntilEvent(event: EventWithDetails): string {
  const now = new Date();
  const startDate = new Date(event.startDate);
  const diff = startDate.getTime() - now.getTime();
  
  if (diff <= 0) {
    return 'Event has started';
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) {
    return `${days} hari, ${hours} jam lagi`;
  } else if (hours > 0) {
    return `${hours} jam, ${minutes} menit lagi`;
  } else {
    return `${minutes} menit lagi`;
  }
}
