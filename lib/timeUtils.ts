/**
 * Time utility functions using native Intl.DateTimeFormat
 */

/**
 * Get timezone offset in minutes for a given timezone
 */
export function getTimeZoneOffsetMinutes(timezone: string, date = new Date()): number {
  const utc = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )
  const tzString = new Intl.DateTimeFormat('en-US', { timeZone: timezone }).format(date)
  const tzDate = new Date(tzString)
  return (utc - tzDate.getTime()) / 6e4
}

/**
 * Format time in a specific timezone
 */
export function formatTimeInTimezone(
  date: Date,
  timezone: string,
  formatStr = 'HH:mm:ss'
): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date)
}

/**
 * Format offset as string like +05:30 or -08:00
 */
export function formatOffset(offsetMinutes: number): string {
  const sign = offsetMinutes >= 0 ? '+' : '-'
  const hours = Math.floor(Math.abs(offsetMinutes) / 60)
  const minutes = Math.abs(offsetMinutes) % 60
  return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

/**
 * Get offset for timezone relative to UTC
 */
export function getTimezoneOffsetString(timezone: string): string {
  const offset = getTimeZoneOffsetMinutes(timezone)
  return formatOffset(-offset) // Convert to UTC+X format
}

/**
 * Calculate timezone difference between two zones
 */
export function getTimezoneDifference(fromTz: string, toTz: string): number {
  const now = new Date()
  const fromOffset = getTimeZoneOffsetMinutes(fromTz, now)
  const toOffset = getTimeZoneOffsetMinutes(toTz, now)
  return (toOffset - fromOffset) / 60 // in hours
}

/**
 * Get common timezone list
 */
export function getCommonTimezones() {
  return [
    { city: 'New York', timezone: 'America/New_York', country: 'US' },
    { city: 'London', timezone: 'Europe/London', country: 'GB' },
    { city: 'Paris', timezone: 'Europe/Paris', country: 'FR' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'JP' },
    { city: 'Sydney', timezone: 'Australia/Sydney', country: 'AU' },
    { city: 'Dubai', timezone: 'Asia/Dubai', country: 'AE' },
    { city: 'Singapore', timezone: 'Asia/Singapore', country: 'SG' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'HK' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'US' },
    { city: 'Moscow', timezone: 'Europe/Moscow', country: 'RU' },
    { city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'IN' },
    { city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'BR' },
    { city: 'Toronto', timezone: 'America/Toronto', country: 'CA' },
    { city: 'Berlin', timezone: 'Europe/Berlin', country: 'DE' },
    { city: 'Seoul', timezone: 'Asia/Seoul', country: 'KR' },
    { city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'CN' },
  ]
}

/**
 * Check if a timezone is currently in DST
 * Simplified: Compare current offset with standard offset approximation
 */
export function isDST(timezone: string, date = new Date()): boolean {
  const currentOffset = getTimeZoneOffsetMinutes(timezone, date)
  // Check January offset (winter in Northern Hemisphere)
  const winterDate = new Date(date.getFullYear(), 0, 1)
  const winterOffset = getTimeZoneOffsetMinutes(timezone, winterDate)
  return currentOffset !== winterOffset
}

/**
 * Get country flag emoji from country code
 */
export function getFlag(countryCode: string): string {
  if (!countryCode) return '🌐'
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
