export function calculateTotalPages(quantityPictures: number, perPage: number) {
  return Math.ceil(quantityPictures / perPage);
}

export const getCurrentPage = (
  searchParameters: URLSearchParams,
  totalPages: number
) => {
  const page = +(searchParameters.get("page") || 1);

  if (page < 1) {
    return 1;
  }

  return page > totalPages ? totalPages : page;
};
