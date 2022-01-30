export const getFormattedDatePickerValue = (date: Date) => {
  if (!(date instanceof Date)) {
    return date;
  }
  const localDate = date.toLocaleDateString();

  const result = localDate.split('/').reduce((acc, section, index) => {
    if (index === 0) {
      return section;
    }
    acc = `${section}-${acc}`;
    return acc;
  }, '');

  return result;
};
