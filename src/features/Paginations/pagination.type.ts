export interface PaginationProperties {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  onPageChange: (newPage: number) => void;
}
