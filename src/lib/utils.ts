import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (
  price: number | string,
  options: {
    currency?: 'USD' | 'CNY' | 'EUR' | 'GBP';
    notation?: Intl.NumberFormatOptions['notation'];
  } = {}
) => {
  const { currency = 'CNY', notation = 'compact' } = options;
  const numbericPrice = Number(price);

  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numbericPrice);
};
