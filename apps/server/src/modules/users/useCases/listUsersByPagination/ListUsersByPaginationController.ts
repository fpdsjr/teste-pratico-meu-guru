import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersByPaginationUseCase } from './ListUsersByPaginationUseCase';

class ListUsersByPaginationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, limit, filter, search } = request.query;
    console.log(search);

    const convertQueryTypeParams = {
      pageToNumber: Number(page),
      limitToNumber: Number(limit),
      filterToString: String(filter),
      searchToString: String(search),
    };
    const { pageToNumber, limitToNumber, searchToString, filterToString } = convertQueryTypeParams;

    const listUsersByPaginationUseCase = container.resolve(ListUsersByPaginationUseCase);

    const listUsersByPagination = await listUsersByPaginationUseCase.execute({
      page: pageToNumber,
      limit: limitToNumber,
      filter: filterToString,
      search: searchToString,
    });

    return response.status(200).json(listUsersByPagination);
  }
}

export { ListUsersByPaginationController };
