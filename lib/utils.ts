// Utility function to get the start of the current week
export function getStartOfWeek(date: Date): Date {
  const dayOfWeek = date.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
}

// Utility function to get the start of the current month
export function getStartOfMonth(date: Date): Date {
  const startOfMonth = new Date(date);
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);
  return startOfMonth;
}

// Utility function to get the start of the last X months
export function getStartOfLastMonths(date: Date, months: number): Date {
  const startOfLastMonths = new Date(date);
  startOfLastMonths.setMonth(startOfLastMonths.getMonth() - months);
  startOfLastMonths.setDate(1);
  startOfLastMonths.setHours(0, 0, 0, 0);
  return startOfLastMonths;
}

// Utility function to get the start of the last X years
export function getStartOfLastYears(date: Date, years: number): Date {
  const startOfLastYears = new Date(date);
  startOfLastYears.setFullYear(startOfLastYears.getFullYear() - years);
  startOfLastYears.setMonth(0);
  startOfLastYears.setDate(1);
  startOfLastYears.setHours(0, 0, 0, 0);
  return startOfLastYears;
}

// Utility function to get the start of the current year
export function getStartOfYear(date: Date): Date {
  const startOfYear = new Date(date);
  startOfYear.setMonth(0);
  startOfYear.setDate(1);
  startOfYear.setHours(0, 0, 0, 0);
  return startOfYear;
}

// Utility function that takes text and cuts it (default length is 170 characters)
export function truncateText(text: string, maxLength = 170) {
  if (text.length <= maxLength) {
    return text;
  } else {
    // Cut the text to the specified maxLength and add ellipsis (...) at the end
    return text.slice(0, maxLength - 3) + "...";
  }
}
