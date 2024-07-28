export const getYearsOfExperience = (startDate: Date, endDate: Date = new Date()) => {
  if (startDate > endDate) {
    throw new Error('startDate must be before endDate.');
  }

  const diff = endDate.getTime() - startDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return `${years.toFixed(1)} years`;
};

export const getMonthNameAndYear = (dateString: string | undefined): string => {
  if (!dateString) {
    return '';
  }

  const date = new Date(dateString);
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${monthName} ${year}`;
};
