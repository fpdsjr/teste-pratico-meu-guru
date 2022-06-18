type FilterTypes = 'nome' | 'email';

interface IListUsersByPaginationDTO {
  page: number;
  limit: number;
  filter: FilterTypes;
  search: string;
}

export { IListUsersByPaginationDTO };
