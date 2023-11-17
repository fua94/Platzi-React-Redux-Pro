type Order = 'ASC' | 'DES';

export function orderByParam<T>(list: T[], param: keyof T, order: Order = 'ASC'): T[] {
  const multiplier = order === 'ASC' ? 1 : -1;

  return list.sort((a: T, b: T) => {
    const valueA = a[param];
    const valueB = b[param];

    if (valueA < valueB) {
      return -1 * multiplier;
    } else if (valueA > valueB) {
      return 1 * multiplier;
    } else {
      return 0;
    }
  });
}