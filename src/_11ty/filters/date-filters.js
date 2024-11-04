import { DateTime } from 'luxon';

// Date formatting (human readable)
export function readableDateFilter (dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('DDD');
};

// Date formatting (machine readable)
export function machineDateFilter (dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
}