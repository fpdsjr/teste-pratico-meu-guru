import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersByPaginationUseCase } from './ListUsersByPaginationUseCase';

class ListUsersByPaginationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, limit, filter, search } = request.query;

    const convertQueryTypeParams = {
      pageToNumber: Number(page),
      limitToNumber: Number(limit),
      filterToString: filter as 'email' | 'nome',
      searchToString: search as string,
    };

    const { pageToNumber, limitToNumber, filterToString, searchToString } = convertQueryTypeParams;

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
