export const getYearsOfExperience = (startDate: Date, endDate: Date = new Date()) => {
  if (startDate > endDate) {
    throw new Error('startDate must be before endDate.');
  }

  const diff = endDate.getTime() - startDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return `${years.toFixed(1)} years`;
};
