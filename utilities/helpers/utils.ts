export const isServer = (): boolean => typeof window === undefined;

export const formatCurrency = (value: number, decimal: number = 2): string => {
  return value.toLocaleString('en-IN', {
    maximumFractionDigits: decimal,
    style: 'currency',
    currency: 'INR'
  });
};
