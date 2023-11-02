export function tariffSortArray(array: string[], order: string[]) {
  const validOrder = order.filter((item) => array.includes(item));

  return validOrder.sort((a, b) => {
    const indexA = array.indexOf(a);
    const indexB = array.indexOf(b);

    return indexA - indexB;
  });
}

export const sortOrder = ["comfort", "vip", "bootcamp"];
