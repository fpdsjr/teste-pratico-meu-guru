type SearchTypes = 'nome' | 'email';

interface IListUsersByPaginationDTO {
  page: number;
  limit: number;
  filter: string;
  search: SearchTypes;
}

export { IListUsersByPaginationDTO };
