export function calculateTotalPages(quantityPictures: number, perPage: number) {
  return Math.ceil(quantityPictures / perPage);
}
