export interface Page<T> {
  perPage: number;
  lastPage: number;
  currentPage: number;
  data: T[];
}

export function createPage<T>({perPage = 10, lastPage = 1, currentPage = 1, data = []}: Partial<Page<T>>): Page<T> {
  return {perPage, lastPage, currentPage, data};
}
